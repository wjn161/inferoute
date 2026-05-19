import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import type { ModelDetail } from "@/lib/models";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  getContextWindowDisplay,
  getMaxOutputDisplay,
  formatPrice,
} from "@/lib/models";
import { CopyButton } from "@/components/copy-button";
import { CodeExamples } from "./code-examples";

const modelsDir = path.join(process.cwd(), "data/models");

function loadModel(provider: string, modelId: string): ModelDetail | null {
  const filePath = path.join(modelsDir, `${provider}--${modelId}.json`);
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as ModelDetail;
  } catch {
    return null;
  }
}

interface PageParams {
  provider: string;
  modelId: string;
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { provider, modelId } = await params;
  const model = loadModel(provider, modelId);
  if (!model) return { title: "Model Not Found | inferoute" };
  return {
    title: `${model.display_name} | inferoute`,
    description: model.description ?? `Details for ${model.display_name} on inferoute.`,
  };
}

const ALL_PRICING_KEYS: { key: keyof ModelDetail["pricing"]; label: string }[] = [
  { key: "input_token", label: "Input" },
  { key: "output_token", label: "Output" },
  { key: "cache_read", label: "Cache Read" },
  { key: "cache_write", label: "Cache Write" },
  { key: "audio_token", label: "Audio" },
  { key: "image_token", label: "Image" },
];

export default async function ModelDetailPage({ params }: { params: Promise<PageParams> }) {
  const { provider, modelId } = await params;
  const model = loadModel(provider, modelId);

  if (!model) {
    return (
      <div className="min-h-screen bg-canvas text-ink">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-medium text-muted">Model not found.</p>
          <Link href="/models" className="mt-4 inline-block text-sm text-route transition hover:underline">
            Browse all models
          </Link>
        </main>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Footer />
        </div>
      </div>
    );
  }

  const hasPricing = Object.keys(model.pricing).length > 0;
  const pricingItems = ALL_PRICING_KEYS.filter(({ key }) => model.pricing[key]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-3xl">
        {/* Hero */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.06em] bg-route/10 text-route">
              {model.model_type}
            </span>
            <span className="text-xs text-muted-dark">{model.brand}</span>
            {model.release_date ? (
              <span className="text-xs text-muted-dark">
                Released {new Date(model.release_date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            ) : null}
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {model.display_name}
          </h1>
          <p className="mt-1 font-mono text-sm text-muted-dark inline-flex items-center gap-2">
            {model.model_id}
            <CopyButton value={model.model_id} className="h-5 w-5" />
          </p>
          {model.description ? (
            <p className="mt-3 max-w-prose text-sm leading-7 text-muted">{model.description}</p>
          ) : null}
        </div>

        {/* Specs row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-6">
          <SpecCard label="Context Window" value={getContextWindowDisplay(model.specifications)} />
          <SpecCard label="Max Output" value={getMaxOutputDisplay(model.specifications)} />
          <SpecCard label="Model Type" value={model.model_type.charAt(0).toUpperCase() + model.model_type.slice(1)} />
          <SpecCard label="Brand" value={model.brand} />
        </div>

        {/* Capabilities & Modalities — side by side */}
        <div className="grid gap-6 sm:grid-cols-3 mb-6">
          <div>
            <h2 className="text-sm font-semibold text-ink">Capabilities</h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {model.capabilities.length > 0 ? (
                model.capabilities.map((cap) => (
                  <span key={cap} className="rounded border border-line bg-canvas-soft px-2.5 py-1 text-xs text-muted">
                    {cap}
                  </span>
                ))
              ) : (
                <span className="text-xs text-muted-dark">—</span>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Input Modalities</h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {model.input_modalities.length > 0 ? (
                model.input_modalities.map((mod) => (
                  <span key={mod} className="rounded border border-line bg-canvas-soft px-2.5 py-1 text-xs text-muted">
                    {mod}
                  </span>
                ))
              ) : (
                <span className="text-xs text-muted-dark">—</span>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Output Modalities</h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {model.output_modalities.length > 0 ? (
                model.output_modalities.map((mod) => (
                  <span key={mod} className="rounded border border-line bg-canvas-soft px-2.5 py-1 text-xs text-muted">
                    {mod}
                  </span>
                ))
              ) : (
                <span className="text-xs text-muted-dark">—</span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing */}
        {hasPricing ? (
          <div className="mb-6 overflow-hidden rounded-lg border border-line">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-canvas-soft">
                  <th className="px-4 py-2.5 text-xs font-medium text-muted uppercase tracking-[0.06em]">Token Type</th>
                  <th className="px-4 py-2.5 text-xs font-medium text-muted uppercase tracking-[0.06em]">Price</th>
                  <th className="px-4 py-2.5 text-xs font-medium text-muted uppercase tracking-[0.06em]">Unit</th>
                </tr>
              </thead>
              <tbody>
                {pricingItems.map(({ key, label }) => (
                  <tr key={key} className="border-b border-line last:border-0">
                    <td className="px-4 py-2.5 font-medium text-ink">{label}</td>
                    <td className="px-4 py-2.5 font-mono text-ink">{formatPrice(model.pricing[key]!)}</td>
                    <td className="px-4 py-2.5 text-muted-dark">{model.pricing[key]!.unit.replace(/_/g, " ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {/* Code Examples */}
        <div>
          <h2 className="text-sm font-semibold text-ink">Code Examples</h2>
          <p className="mt-1 text-xs text-muted">
            Use this model via the OpenAI-compatible endpoint.
          </p>
          <div className="mt-3">
            <CodeExamples modelId={model.model_id} />
          </div>
        </div>
        </div>
      </main>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Footer />
      </div>
    </div>
  );
}

function SpecCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-canvas-soft p-3.5">
      <p className="text-[11px] text-muted-dark">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}
