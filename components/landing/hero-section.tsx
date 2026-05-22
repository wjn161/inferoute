import {
  ArrowRight,
  Code2,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { ProviderLogo } from "./provider-logo";
import type { Provider } from "./types";

function CodePanel() {
  return (
    <div
      id="quickstart"
      className="w-full max-w-full min-w-0 overflow-hidden rounded-lg border border-line bg-[#0a0c0c] shadow-glow"
    >
      <div className="flex items-center justify-between border-b border-line bg-canvas-soft px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-flame" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-route" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Quickstart
        </span>
      </div>
      <pre className="max-w-full overflow-x-auto p-4 text-[12px] leading-6 text-ink sm:p-6 sm:text-[13px]">
        <code>{`import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.INFEROUTE_API_KEY,
  baseURL: "https://api.inferoute.ai/v1"
});

const response = await client.chat.completions.create({
  model: "inferoute/auto",
  messages: [
    { role: "user", content: "Refactor this agent workflow." }
  ],
  routing: {
    max_cost: "builder",
    fallback: "fastest_available",
    prefer: ["deepseek", "qwen", "kimi", "glm", "minimax", "xiaomi", "seed", "kling"]
  }
});`}</code>
      </pre>
    </div>
  );
}

function RoutingDiagram({ providers }: { providers: Provider[] }) {
  return (
    <div className="rounded-lg border border-line bg-canvas-soft p-4 sm:p-5">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0 rounded-md border border-line bg-canvas p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-canvas-raised text-route">
              <TerminalSquare size={20} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                One endpoint
              </p>
              <p className="mt-1 truncate text-sm font-semibold text-ink">
                /v1/chat/completions
              </p>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 items-center gap-3 rounded-md border border-route/40 bg-route/10 p-3 text-route">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-canvas">
            <Workflow size={22} aria-hidden="true" />
          </div>
          <div className="min-w-0 sm:hidden lg:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-route">
              Router
            </p>
            <p className="mt-1 text-sm font-semibold text-ink">Policy engine</p>
          </div>
        </div>
      </div>

      <div className="my-3 flex items-center gap-3" aria-hidden="true">
        <div className="h-px flex-1 route-line" />
        <div className="h-2 w-2 rounded-full bg-route" />
        <div className="h-px flex-1 route-line" />
      </div>

      <div className="grid min-w-0 grid-cols-2 gap-2 lg:grid-cols-4">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className="min-w-0 overflow-hidden rounded-md border border-line bg-[#0c0f0f] px-1 py-1.5"
            style={{ boxShadow: `inset 0 0 0 1px ${provider.accent}22` }}
          >
            <div className="flex min-w-0 items-center gap-1">
              <ProviderLogo provider={provider} loading="eager" />
              <span
                className="block min-w-0 truncate text-[11px] font-semibold leading-5 text-ink"
                title={provider.name}
              >
                {provider.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface HeroSectionProps {
  providers: Provider[];
}

export function HeroSection({ providers }: HeroSectionProps) {
  return (
    <section className="relative border-b border-line">
      <div className="grid-mask absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <Header variant="transparent" />

        <div className="grid min-w-0 flex-1 items-center gap-10 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-20">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas-soft px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-route">
              <Sparkles size={13} aria-hidden="true" />
              AI gateway for production model routing
            </div>
            <h1 className="mt-7 max-w-4xl text-4xl font-normal leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl sm:leading-[0.98] lg:text-7xl">
              Route every prompt to the best open model.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Inferoute is an OpenAI-compatible AI gateway for teams that want
              lower cost, faster fallback, and full control across modern open
              models.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              Use one endpoint to access the models you actually want to ship
              with, without rewriting your stack every time the market moves.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/login"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-flame px-6 font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20"
              >
                Start building free
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link
                href="/models"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-line bg-canvas-soft px-6 font-semibold text-ink transition hover:border-route/60"
              >
                <Code2 size={18} aria-hidden="true" />
                Explore Models
              </Link>
            </div>
            <div className="mt-8 rounded-md border border-line bg-canvas-soft px-4 py-3 text-sm leading-6 text-muted">
              Built for AI developers using agents, coding assistants, and
              production workflows.
            </div>
          </div>
          <div className="min-w-0 space-y-4">
            <CodePanel />
            <RoutingDiagram providers={providers} />
          </div>
        </div>
      </div>
    </section>
  );
}
