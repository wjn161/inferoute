import { CheckCircle2 } from "lucide-react";

interface ProofSectionProps {
  proofBadges: string[];
}

export function ProofSection({ proofBadges }: ProofSectionProps) {
  return (
    <section className="border-b border-line bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
            Made for the workflows developers already use
          </p>
          <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
            OpenAI-style interface. Routing controls. Cost visibility.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Migration-ready docs, coding workflow support, agent pipeline
            controls, and multi-model visibility for production API teams.
          </p>
        </div>
        <div className="grid content-start gap-3 sm:grid-cols-2">
          {proofBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-3 rounded-md border border-line bg-canvas-soft px-4 py-3 text-sm text-muted"
            >
              <CheckCircle2 className="h-4 w-4 text-route" aria-hidden="true" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
