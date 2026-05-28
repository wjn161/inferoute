#!/usr/bin/env bash
set -euo pipefail

# inferoute PM2 production deploy
# Usage: ./scripts/prod.sh [build|deploy|start|stop|restart|reload|status|logs]

SCRIPT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"

red()   { printf '\033[31m%s\033[0m\n' "$1"; }
green() { printf '\033[32m%s\033[0m\n' "$1"; }
cyan()  { printf '\033[36m%s\033[0m\n' "$1"; }

check_env() {
  if ! command -v node &>/dev/null; then red "Node.js is required"; exit 1; fi
  if ! command -v pnpm &>/dev/null; then red "pnpm is required"; exit 1; fi
  if command -v pm2 &>/dev/null; then
    PM2="pm2"
  else
    PM2="npx pm2"
  fi
  local node_major; node_major=$(node -v | cut -d. -f1 | sed 's/v//')
  if [ "$node_major" -lt 20 ]; then red "Node.js >= 20 required (found v$(node -v))"; exit 1; fi
  green "Node $(node -v) / pnpm $(pnpm -v) / pm2 $($PM2 -v)"
}

install() {
  cyan "[1/2] Installing dependencies..."
  cd "$SCRIPT_DIR"
  pnpm install --frozen-lockfile --prod=false
}

build() {
  cyan "[2/2] Building production bundle..."
  cd "$SCRIPT_DIR"
  pnpm build
  green "Build OK — standalone: .next/standalone"
}

deploy() {
  install
  build
  mkdir -p "$LOG_DIR"

  if $PM2 list | grep -q inferoute; then
    cyan "Reloading inferoute (zero-downtime)..."
    $PM2 reload inferoute
    green "Reloaded."
  else
    cyan "Starting inferoute via PM2..."
    $PM2 start "$SCRIPT_DIR/ecosystem.config.cjs"
    $PM2 save
    green "Started + saved."
  fi
}

start() {
  cyan "Starting inferoute via PM2..."
  cd "$SCRIPT_DIR"
  $PM2 start ecosystem.config.cjs
  $PM2 save
  green "Started."
}

stop() {
  cyan "Stopping inferoute..."
  $PM2 stop inferoute
  green "Stopped."
}

restart() {
  cyan "Restarting inferoute..."
  $PM2 restart inferoute
  green "Restarted."
}

reload() {
  cyan "Reloading inferoute (zero-downtime)..."
  $PM2 reload inferoute
  green "Reloaded."
}

status() {
  $PM2 status inferoute
}

logs() {
  $PM2 logs inferoute "${@}"
}

banner() {
  echo ""
  cyan "═══════════════════════════════════════"
  cyan "  inferoute · PM2 production pipeline"
  cyan "═══════════════════════════════════════"
  echo ""
}

main() {
  banner
  check_env

  case "${1:-deploy}" in
    build)   install && build; green "Build done. Run './scripts/prod.sh deploy' to serve." ;;
    deploy)  deploy ;;
    start)   start ;;
    stop)    stop ;;
    restart) restart ;;
    reload)  reload ;;
    status)  status ;;
    logs)    shift; logs "$@" ;;
    *)
      red "Unknown command: ${1:-}"
      echo "Usage: ./scripts/prod.sh [build|deploy|start|stop|restart|reload|status|logs]"
      exit 1
      ;;
  esac
}

main "$@"
