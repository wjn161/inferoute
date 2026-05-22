import type { ModelDetail } from "@/lib/models";
import { loadModelIndex, loadModelDetail } from "@/lib/models-server";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ModelList from "@/components/model-list";

export default async function ModelsPage() {
  const index = await loadModelIndex();

  const details: ModelDetail[] = [];
  for (const entry of index.models) {
    const [provider, modelId] = entry.model_id.split("/");
    const detail = await loadModelDetail(provider, modelId);
    if (detail) details.push(detail);
  }

  const providers = [...new Set(details.map((m) => m.brand))].sort();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Model Catalog
          </h1>
          <p className="mt-2 text-sm text-muted">
            {details.length} models across {providers.length} providers. Route through one
            OpenAI-compatible endpoint.
          </p>
        </div>

        <ModelList models={details} />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Footer />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Model Catalog | inferoute",
  description: "Browse 90+ AI models across multiple providers. Compare pricing, context windows, and capabilities all in one place.",
};
