import { BarChart3, Globe, ShieldCheck, Zap } from "lucide-react";

export function StatsSection() {
  return (
    <section className="border-b border-line bg-[#0c0f0f]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-line bg-canvas-soft p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-route/10 text-route">
              <Zap size={24} />
            </div>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-ink">
              90+
            </p>
            <p className="mt-2 text-sm text-muted">Models available across major Chinese AI providers</p>
          </div>
          <div className="rounded-lg border border-line bg-canvas-soft p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-flame/10 text-flame">
              <Globe size={24} />
            </div>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-ink">
              8+
            </p>
            <p className="mt-2 text-sm text-muted">Provider families routed through one endpoint</p>
          </div>
          <div className="rounded-lg border border-line bg-canvas-soft p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber/10 text-amber">
              <BarChart3 size={24} />
            </div>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-ink">
              10M+
            </p>
            <p className="mt-2 text-sm text-muted">Requests processed monthly across all providers</p>
          </div>
          <div className="rounded-lg border border-line bg-canvas-soft p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-route/10 text-route">
              <ShieldCheck size={24} />
            </div>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-ink">
              99.9%
            </p>
            <p className="mt-2 text-sm text-muted">Uptime with automatic provider fallback</p>
          </div>
        </div>
      </div>
    </section>
  );
}
