import { Footer } from "@/components/footer";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section id="faq" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
            Built for teams evaluating LLM API infrastructure.
          </h2>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-line bg-canvas-soft p-5"
            >
              <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
}
