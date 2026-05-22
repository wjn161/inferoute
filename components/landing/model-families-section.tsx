import { ProviderLogo } from "./provider-logo";
import type { Provider } from "./types";

interface ModelFamiliesSectionProps {
  providers: Provider[];
}

export function ModelFamiliesSection({ providers }: ModelFamiliesSectionProps) {
  return (
    <section id="models" className="border-b border-line bg-[#101211]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
            Model families
          </p>
          <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
            Open-model-first, multi-provider by design.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Start with open model families, keep explicit routing control, and
            avoid rebuilding your product around whichever provider wins this
            month.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider) => (
            <article
              key={provider.name}
              className="rounded-lg border border-line bg-canvas p-5"
            >
              <div className="flex items-center gap-3">
                <ProviderLogo provider={provider} size="md" />
                <h3 className="flex-1 text-xl font-semibold text-ink">
                  {provider.name}
                </h3>
                <span
                  className="shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{
                    backgroundColor: `${provider.accent}16`,
                    color: provider.accent,
                  }}
                >
                  Routable
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                {provider.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
