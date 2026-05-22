import type { LucideIcon } from "lucide-react";

interface FeatureModule {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  modules: FeatureModule[];
}

export function FeaturesSection({ modules }: FeaturesSectionProps) {
  return (
    <section id="features" className="border-b border-line bg-canvas-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
            Gateway modules
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            Everything around the model call matters.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {modules.map((module) => (
            <article
              key={module.title}
              className="rounded-2xl border border-line bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-flame/10 text-flame">
                  <module.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-ink">
                  {module.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                {module.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
