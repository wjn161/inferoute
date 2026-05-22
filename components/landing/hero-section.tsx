import { ArrowRight, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";

export function HeroSection() {
  return (
    <section className="relative border-b border-line">
      <div className="grid-mask absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-7xl flex-col px-4 py-5 sm:min-h-screen sm:px-6 lg:px-8">
        <Header variant="transparent" />

        <div className="flex min-w-0 flex-1 items-center justify-center py-20 lg:py-32">
          {/* Headline + CTA */}
          <div className="min-w-0 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas-soft px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-route">
              <Sparkles size={13} aria-hidden="true" />
              AI gateway for production model routing
            </div>

            <h1 className="mt-10 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:mt-12 sm:text-7xl sm:leading-[0.95] sm:tracking-[-0.04em] lg:text-[5.5rem]">
              Route every prompt to the best open model.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-muted sm:mt-10 sm:text-xl sm:leading-8">
              One API to unlock every open model—cut inference costs by up to 70% while keeping your AI agents fast, secure, and always available.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
              <a
                href="/login"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-flame px-6 text-base font-semibold text-white transition hover:bg-[#c01f00] focus:outline-none focus:ring-4 focus:ring-flame/20 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
              >
                Start building free
                <ArrowRight size={20} aria-hidden="true" />
              </a>
              <Link
                href="/models"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-line bg-canvas-soft px-6 text-base font-semibold text-ink transition hover:border-ink/30 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
              >
                <Code2 size={20} aria-hidden="true" />
                Explore 90+ Models
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
