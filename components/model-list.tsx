"use client";

import { useState, useMemo } from "react";
import {
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ModelDetail } from "@/lib/models";
import {
  getContextWindowDisplay,
  getMaxOutputDisplay,
  formatPrice,
  getProviderFromModelId,
  getModelIdFromModelId,
} from "@/lib/models";
import { CopyButton } from "@/components/copy-button";

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const logoMap: Record<string, string> = {
  DeepSeek: "/providers/deepseek.svg",
  Qwen: "/providers/qwen.svg",
  Kimi: "/providers/kimi.svg",
  GLM: "/providers/glm.svg",
  MiniMax: "/providers/minimax.svg",
  Xiaomi: "/providers/xiaomi.svg",
  Seed: "/providers/seed.svg",
  Kling: "/providers/kling.svg",
  MoonshotAI: "/providers/kimi.svg",
  Bailian: "/providers/qwen.svg",
  Volcengine: "/providers/seed.svg",
  Doubao: "/providers/seed.svg",
  ZhipuAI: "/providers/glm.svg",
  Zhipu: "/providers/glm.svg",
};

function getLogo(brand: string): string {
  return logoMap[brand] ?? "/providers/deepseek.svg";
}

const CONTEXT_BUCKETS = [
  { label: "Up to 32K", max: 32_000 },
  { label: "32K – 128K", min: 32_000, max: 128_000 },
  { label: "128K – 1M", min: 128_000, max: 1_000_000 },
  { label: "1M+", min: 1_000_000 },
];

const PRICING_TIERS = [
  { label: "Free", maxPrice: 0 },
  { label: "$0 – 0.50", maxPrice: 0.5 },
  { label: "$0.50 – 2.00", minPrice: 0.5, maxPrice: 2.0 },
  { label: "$2.00+", minPrice: 2.0 },
];

interface ModelListProps {
  models: ModelDetail[];
}

export default function ModelList({ models }: ModelListProps) {
  const [search, setSearch] = useState("");
  const [providerFilter, setProviderFilter] = useState<Set<string>>(new Set());
  const [typeFilter, setTypeFilter] = useState<Set<string>>(new Set());
  const [capabilityFilter, setCapabilityFilter] = useState<Set<string>>(new Set());
  const [contextFilter, setContextFilter] = useState<Set<string>>(new Set());
  const [pricingFilter, setPricingFilter] = useState<Set<string>>(new Set());
  const [inputModalityFilter, setInputModalityFilter] = useState<Set<string>>(new Set());
  const [outputModalityFilter, setOutputModalityFilter] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const providers = useMemo(
    () => [...new Set(models.map((m) => m.brand))].sort(),
    [models]
  );

  const modelTypes = useMemo(
    () => [...new Set(models.map((m) => m.model_type))].sort(),
    [models]
  );

  const allCapabilities = useMemo(
    () => [...new Set(models.flatMap((m) => m.capabilities))].sort(),
    [models]
  );

  const allInputModalities = useMemo(
    () => [...new Set(models.flatMap((m) => m.input_modalities))].sort(),
    [models]
  );

  const allOutputModalities = useMemo(
    () => [...new Set(models.flatMap((m) => m.output_modalities))].sort(),
    [models]
  );

  function toggleFilter(setter: React.Dispatch<React.SetStateAction<Set<string>>>, value: string) {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }

  function clearFilters() {
    setProviderFilter(new Set());
    setTypeFilter(new Set());
    setCapabilityFilter(new Set());
    setContextFilter(new Set());
    setPricingFilter(new Set());
    setInputModalityFilter(new Set());
    setOutputModalityFilter(new Set());
    setSearch("");
  }

  const filtered = useMemo(() => {
    let result = models;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.display_name.toLowerCase().includes(q) ||
          m.brand.toLowerCase().includes(q) ||
          m.model_id.toLowerCase().includes(q)
      );
    }

    if (providerFilter.size > 0) {
      result = result.filter((m) => providerFilter.has(m.brand));
    }

    if (typeFilter.size > 0) {
      result = result.filter((m) => typeFilter.has(m.model_type));
    }

    if (capabilityFilter.size > 0) {
      result = result.filter((m) => m.capabilities.some((c) => capabilityFilter.has(c)));
    }

    if (contextFilter.size > 0) {
      result = result.filter((m) => {
        const ctx = m.specifications.context_window;
        if (ctx == null) return false;
        return CONTEXT_BUCKETS.some((bucket) => {
          if (!contextFilter.has(bucket.label)) return false;
          if (bucket.min != null && ctx < bucket.min) return false;
          if (bucket.max != null && ctx >= bucket.max) return false;
          return true;
        });
      });
    }

    if (pricingFilter.size > 0) {
      result = result.filter((m) => {
        const price = m.pricing.input_token?.price;
        return PRICING_TIERS.some((tier) => {
          if (!pricingFilter.has(tier.label)) return false;
          if (price == null && tier.maxPrice !== 0) return false;
          if (tier.maxPrice === 0) return price == null || price === 0;
          if (tier.minPrice != null && (price ?? 0) < tier.minPrice) return false;
          if (tier.maxPrice != null && (price ?? 0) >= tier.maxPrice) return false;
          return true;
        });
      });
    }

    if (inputModalityFilter.size > 0) {
      result = result.filter((m) =>
        m.input_modalities.some((mod) => inputModalityFilter.has(mod))
      );
    }

    if (outputModalityFilter.size > 0) {
      result = result.filter((m) =>
        m.output_modalities.some((mod) => outputModalityFilter.has(mod))
      );
    }

    result = [...result].sort((a, b) => {
      const aGlm5 = a.model_id.includes("glm-5") || a.model_id.includes("glm-5.");
      const bGlm5 = b.model_id.includes("glm-5") || b.model_id.includes("glm-5.");
      if (aGlm5 && !bGlm5) return -1;
      if (!aGlm5 && bGlm5) return 1;
      return a.display_name.localeCompare(b.display_name);
    });

    return result;
  }, [
    search,
    providerFilter,
    typeFilter,
    capabilityFilter,
    contextFilter,
    pricingFilter,
    inputModalityFilter,
    outputModalityFilter,
    models,
  ]);

  const hasFilters =
    providerFilter.size > 0 ||
    typeFilter.size > 0 ||
    capabilityFilter.size > 0 ||
    contextFilter.size > 0 ||
    pricingFilter.size > 0 ||
    inputModalityFilter.size > 0 ||
    outputModalityFilter.size > 0;

  const filterCount =
    providerFilter.size +
    typeFilter.size +
    capabilityFilter.size +
    contextFilter.size +
    pricingFilter.size +
    inputModalityFilter.size +
    outputModalityFilter.size;

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      {/* Sidebar filters */}
      <aside className="hidden lg:block">
        <FilterPanel
          providers={providers}
          modelTypes={modelTypes}
          allCapabilities={allCapabilities}
          allInputModalities={allInputModalities}
          allOutputModalities={allOutputModalities}
          providerFilter={providerFilter}
          typeFilter={typeFilter}
          capabilityFilter={capabilityFilter}
          contextFilter={contextFilter}
          pricingFilter={pricingFilter}
          inputModalityFilter={inputModalityFilter}
          outputModalityFilter={outputModalityFilter}
          toggleProvider={(v) => toggleFilter(setProviderFilter, v)}
          toggleType={(v) => toggleFilter(setTypeFilter, v)}
          toggleCapability={(v) => toggleFilter(setCapabilityFilter, v)}
          toggleContext={(v) => toggleFilter(setContextFilter, v)}
          togglePricing={(v) => toggleFilter(setPricingFilter, v)}
          toggleInputModality={(v) => toggleFilter(setInputModalityFilter, v)}
          toggleOutputModality={(v) => toggleFilter(setOutputModalityFilter, v)}
          clearFilters={clearFilters}
        />
      </aside>

      {/* Main content */}
      <div className="min-w-0">
        {/* Search + Sort bar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-dark"
              aria-hidden="true"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search models..."
              className="h-10 w-full rounded-md border border-line bg-canvas-soft pl-9 pr-10 text-sm text-ink outline-none transition placeholder:text-muted-dark focus:border-route focus:ring-4 focus:ring-route/10"
            />
            {search ? (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-dark transition hover:text-muted"
              >
                <X size={14} />
              </button>
            ) : null}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex h-10 shrink-0 items-center gap-2 rounded-md border border-line bg-canvas-soft px-3 text-sm text-muted transition hover:text-ink lg:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasFilters ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-route text-[10px] font-semibold text-canvas">
                  {filterCount}
                </span>
              ) : null}
            </button>
        </div>

        {/* Mobile filters */}
        {showFilters ? (
          <div className="mb-6 rounded-lg border border-line bg-canvas-soft p-4 lg:hidden">
            <FilterPanel
              providers={providers}
              modelTypes={modelTypes}
              allCapabilities={allCapabilities}
              allInputModalities={allInputModalities}
              allOutputModalities={allOutputModalities}
              providerFilter={providerFilter}
              typeFilter={typeFilter}
              capabilityFilter={capabilityFilter}
              contextFilter={contextFilter}
              pricingFilter={pricingFilter}
              inputModalityFilter={inputModalityFilter}
              outputModalityFilter={outputModalityFilter}
              toggleProvider={(v) => toggleFilter(setProviderFilter, v)}
              toggleType={(v) => toggleFilter(setTypeFilter, v)}
              toggleCapability={(v) => toggleFilter(setCapabilityFilter, v)}
              toggleContext={(v) => toggleFilter(setContextFilter, v)}
              togglePricing={(v) => toggleFilter(setPricingFilter, v)}
              toggleInputModality={(v) => toggleFilter(setInputModalityFilter, v)}
              toggleOutputModality={(v) => toggleFilter(setOutputModalityFilter, v)}
              clearFilters={clearFilters}
            />
          </div>
        ) : null}

        {/* Result count */}
        <div className="mb-4 flex items-center justify-between text-sm text-muted">
          <span>{filtered.length} models</span>
          {hasFilters ? (
            <button onClick={clearFilters} className="text-route transition hover:underline">
              Clear all filters
            </button>
          ) : null}
        </div>

        {/* Model cards grid */}
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((model) => (
            <ModelCard key={model.model_id} model={model} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-muted">
            <p className="text-lg font-medium">No models match your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-2 text-sm text-route transition hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function FilterPanel({
  providers,
  modelTypes,
  allCapabilities,
  allInputModalities,
  allOutputModalities,
  providerFilter,
  typeFilter,
  capabilityFilter,
  contextFilter,
  pricingFilter,
  inputModalityFilter,
  outputModalityFilter,
  toggleProvider,
  toggleType,
  toggleCapability,
  toggleContext,
  togglePricing,
  toggleInputModality,
  toggleOutputModality,
  clearFilters,
}: {
  providers: string[];
  modelTypes: string[];
  allCapabilities: string[];
  allInputModalities: string[];
  allOutputModalities: string[];
  providerFilter: Set<string>;
  typeFilter: Set<string>;
  capabilityFilter: Set<string>;
  contextFilter: Set<string>;
  pricingFilter: Set<string>;
  inputModalityFilter: Set<string>;
  outputModalityFilter: Set<string>;
  toggleProvider: (v: string) => void;
  toggleType: (v: string) => void;
  toggleCapability: (v: string) => void;
  toggleContext: (v: string) => void;
  togglePricing: (v: string) => void;
  toggleInputModality: (v: string) => void;
  toggleOutputModality: (v: string) => void;
  clearFilters: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-ink">Filters</span>
        <button onClick={clearFilters} className="text-xs text-muted transition hover:text-ink">
          Reset all
        </button>
      </div>

      <CollapsibleSection title="Provider" count={providerFilter.size} defaultOpen>
        <div className="space-y-1">
          {providers.map((p) => (
            <ProviderFilterItem
              key={p}
              label={p}
              logo={getLogo(p)}
              active={providerFilter.has(p)}
              onClick={() => toggleProvider(p)}
            />
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Model Type" count={typeFilter.size}>
        <div className="flex flex-wrap gap-1.5">
          {modelTypes.map((t) => (
            <FilterChip
              key={t}
              label={t.charAt(0).toUpperCase() + t.slice(1)}
              active={typeFilter.has(t)}
              onClick={() => toggleType(t)}
            />
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Context Window" count={contextFilter.size}>
        <div className="flex flex-wrap gap-1.5">
          {CONTEXT_BUCKETS.map((b) => (
            <FilterChip
              key={b.label}
              label={b.label}
              active={contextFilter.has(b.label)}
              onClick={() => toggleContext(b.label)}
            />
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Pricing" count={pricingFilter.size}>
        <div className="flex flex-wrap gap-1.5">
          {PRICING_TIERS.map((t) => (
            <FilterChip
              key={t.label}
              label={t.label}
              active={pricingFilter.has(t.label)}
              onClick={() => togglePricing(t.label)}
            />
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Capabilities" count={capabilityFilter.size}>
        <div className="flex flex-wrap gap-1.5">
          {allCapabilities.map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={capabilityFilter.has(c)}
              onClick={() => toggleCapability(c)}
            />
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Input Modality" count={inputModalityFilter.size}>
        <div className="flex flex-wrap gap-1.5">
          {allInputModalities.map((m) => (
            <FilterChip
              key={m}
              label={m}
              active={inputModalityFilter.has(m)}
              onClick={() => toggleInputModality(m)}
            />
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Output Modality" count={outputModalityFilter.size}>
        <div className="flex flex-wrap gap-1.5">
          {allOutputModalities.map((m) => (
            <FilterChip
              key={m}
              label={m}
              active={outputModalityFilter.has(m)}
              onClick={() => toggleOutputModality(m)}
            />
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );
}

function CollapsibleSection({
  title,
  count,
  defaultOpen = false,
  children,
}: {
  title: string;
  count: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line pb-4 last:border-0 last:pb-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-xs font-medium uppercase tracking-[0.08em] text-muted-dark transition hover:text-ink"
      >
        <div className="flex items-center gap-2">
          <span>{title}</span>
          {count > 0 ? (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-route/20 text-[10px] font-semibold text-route">
              {count}
            </span>
          ) : null}
        </div>
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {open ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}

function ProviderFilterItem({
  label,
  logo,
  active,
  onClick,
}: {
  label: string;
  logo: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm transition",
        active
          ? "bg-route/10 text-ink"
          : "text-muted hover:bg-canvas hover:text-ink"
      )}
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white p-0.5">
        <Image
          src={logo}
          alt=""
          width={16}
          height={16}
          className="h-3.5 w-3.5 object-contain"
        />
      </span>
      <span className="truncate">{label}</span>
    </button>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-md border px-2.5 py-1 text-xs font-medium transition",
        active
          ? "border-route/60 bg-route/10 text-route"
          : "border-line bg-canvas text-muted hover:border-line hover:text-ink"
      )}
    >
      {label}
    </button>
  );
}

function ModelCard({ model }: { model: ModelDetail }) {
  const provider = getProviderFromModelId(model.model_id);
  const modelId = getModelIdFromModelId(model.model_id);

  return (
    <Link
      href={`/models/${provider}/${modelId}`}
      className="group min-w-0 flex flex-col rounded-lg border border-line bg-canvas-soft p-4 transition hover:border-route/40 sm:p-5"
    >
      <div className="flex items-start justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white p-1">
            <Image
              src={getLogo(model.brand)}
              alt=""
              width={24}
              height={24}
              className="h-5 w-5 object-contain"
            />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink truncate">{model.display_name}</p>
            <p className="text-xs text-muted-dark">{model.brand}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 min-w-0">
        <p className="font-mono text-[11px] text-muted-dark truncate">{model.model_id}</p>
        <CopyButton value={model.model_id} />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
        <div>
          <span className="text-muted-dark">Context</span>
          <p className="font-medium text-ink">{getContextWindowDisplay(model.specifications)}</p>
        </div>
        <div>
          <span className="text-muted-dark">Max output</span>
          <p className="font-medium text-ink">{getMaxOutputDisplay(model.specifications)}</p>
        </div>
      </div>

      <div className="mt-3 border-t border-line pt-3">
        <div className="grid grid-cols-3 gap-x-2 text-[11px]">
          <div>
            <span className="text-muted-dark">Input</span>
            <p className="font-mono font-medium text-ink">{formatPrice(model.pricing.input_token)}</p>
          </div>
          <div>
            <span className="text-muted-dark">Output</span>
            <p className="font-mono font-medium text-ink">{formatPrice(model.pricing.output_token)}</p>
          </div>
          <div>
            <span className="text-muted-dark">Cache</span>
            <p className="font-mono font-medium text-ink">{formatPrice(model.pricing.cache_read)}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {model.capabilities.slice(0, 4).map((cap) => (
          <span
            key={cap}
            className="rounded border border-line bg-canvas px-1.5 py-0.5 text-[10px] text-muted"
          >
            {cap}
          </span>
        ))}
        {model.capabilities.length > 4 ? (
          <span className="text-[10px] text-muted-dark">+{model.capabilities.length - 4}</span>
        ) : null}
      </div>

      {model.description ? (
        <p className="mt-3 line-clamp-2 text-xs text-muted">{model.description}</p>
      ) : null}

      <div className="mt-auto pt-3 flex items-center gap-1 text-[11px] text-route opacity-0 transition group-hover:opacity-100">
        <span>View details</span>
        <ArrowUpRight size={12} />
      </div>
    </Link>
  );
}
