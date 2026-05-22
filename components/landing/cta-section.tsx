import { ArrowRight, CheckCircle2, LogIn } from "lucide-react";

export function CtaSection() {
  return (
    <section className="border-b border-line bg-[#111413]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
            Start building
          </p>
          <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
            Stop choosing one model too early.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            The model market moves every week. Your product should not have
            to. Start with one endpoint, route smarter over time, and keep
            your architecture flexible.
          </p>
          <a
            href="/login"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-flame px-8 font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20"
          >
            <LogIn size={18} aria-hidden="true" />
            Sign in to get your API key
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <div className="mt-8 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-sm text-muted">
              <CheckCircle2 className="h-4 w-4 text-route" aria-hidden="true" />
              Free to start
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <CheckCircle2 className="h-4 w-4 text-route" aria-hidden="true" />
              No credit card required
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <CheckCircle2 className="h-4 w-4 text-route" aria-hidden="true" />
              OpenAI compatible
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
