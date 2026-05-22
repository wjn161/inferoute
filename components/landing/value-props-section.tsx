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
    <section className="border-b border-line bg-canvas">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-3 lg:grid-cols-3">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-line bg-canvas-soft p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-route/10 text-route">
                <item.icon size={20} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-ink">
                {item.title}
              </h2>
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
