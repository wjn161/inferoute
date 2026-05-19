import fs from "fs";
import path from "path";
import type { ModelDetail, ModelIndex } from "@/lib/models";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ModelList from "@/components/model-list";

const modelsDir = path.join(process.cwd(), "data/models");

function loadModelDetail(provider: string, modelId: string): ModelDetail | null {
  const filePath = path.join(modelsDir, `${provider}--${modelId}.json`);
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as ModelDetail;
  } catch {
    return null;
  }
}

export default function ModelsPage() {
  const indexRaw = fs.readFileSync(path.join(modelsDir, "_index.json"), "utf-8");
  const index = JSON.parse(indexRaw) as ModelIndex;

  const details: ModelDetail[] = [];
  for (const entry of index.models) {
    const [provider, modelId] = entry.model_id.split("/");
    const detail = loadModelDetail(provider, modelId);
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
