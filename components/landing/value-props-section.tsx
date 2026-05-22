import type { LucideIcon } from "lucide-react";

interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValuePropsSectionProps {
  valueProps: ValueProp[];
}

export function ValuePropsSection({ valueProps }: ValuePropsSectionProps) {
  return (
    <section className="border-b border-line bg-canvas-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
            Why inferoute
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            Built for teams who care where each request goes.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-flame/10 text-flame">
                <item.icon size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
