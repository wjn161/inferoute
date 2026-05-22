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
    <section id="features" className="border-b border-line bg-canvas">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
            Gateway modules
          </p>
          <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
            Everything around the model call matters.
          </h2>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {modules.map((module) => (
            <article
              key={module.title}
              className="rounded-lg border border-line bg-canvas-soft p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-route/10 text-route">
                <module.icon size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">
                {module.title}
              </h3>
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
