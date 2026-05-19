import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line pt-8">
      {/* Top row: product nav links */}
      <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <Link href="/models" className="text-muted transition hover:text-ink">
          Models
        </Link>
        <Link href="/#features" className="text-muted transition hover:text-ink">
          Features
        </Link>
        <Link href="/#pricing" className="text-muted transition hover:text-ink">
          Pricing
        </Link>
        <a
          href="https://docs.inferoute.ai"
          className="text-muted transition hover:text-ink"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
        <Link href="/#faq" className="text-muted transition hover:text-ink">
          FAQ
        </Link>
      </div>

      {/* Column sections */}
      <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-ink">Company</h3>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/about" className="text-sm text-muted transition hover:text-ink">About</Link>
            <Link href="/terms" className="text-sm text-muted transition hover:text-ink">Terms of Service</Link>
            <Link href="/privacy" className="text-sm text-muted transition hover:text-ink">Privacy Policy</Link>
            <Link href="/dpa" className="text-sm text-muted transition hover:text-ink">Data Processing Agreement</Link>
            <Link href="/sla" className="text-sm text-muted transition hover:text-ink">Service Level Agreement</Link>
            <Link href="/support" className="text-sm text-muted transition hover:text-ink">Support</Link>
          </div>
        </div>

        {/* Developer */}
        <div>
          <h3 className="text-sm font-semibold text-ink">Developer</h3>
          <div className="mt-3 flex flex-col gap-2">
            <a href="https://docs.inferoute.ai" className="text-sm text-muted transition hover:text-ink" target="_blank" rel="noreferrer">Documentation</a>
            <a href="https://docs.inferoute.ai/api-reference" className="text-sm text-muted transition hover:text-ink" target="_blank" rel="noreferrer">API Reference</a>
            <a href="https://status.inferoute.ai" className="text-sm text-muted transition hover:text-ink" target="_blank" rel="noreferrer">Status</a>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-sm font-semibold text-ink">Connect</h3>
          <div className="mt-3 flex flex-col gap-2">
            <a href="https://discord.gg/inferoute" className="text-sm text-muted transition hover:text-ink" target="_blank" rel="noreferrer">Discord</a>
            <a href="https://github.com/inferoute" className="text-sm text-muted transition hover:text-ink" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/company/inferoute" className="text-sm text-muted transition hover:text-ink" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/inferoute" className="text-sm text-muted transition hover:text-ink" target="_blank" rel="noreferrer">X</a>
            <a href="https://youtube.com/@inferoute" className="text-sm text-muted transition hover:text-ink" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>

        {/* Brand + Copyright */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/inferoute-mark.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-md"
              aria-hidden="true"
            />
            <span className="font-medium text-ink">inferoute</span>
          </div>
          <p className="mt-3 text-sm text-muted">
            OpenAI-compatible AI gateway for modern open models.
          </p>
          <p className="mt-4 text-sm text-muted">
            &copy; {new Date().getFullYear()} inferoute.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
