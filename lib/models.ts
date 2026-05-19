export interface ModelPricingItem {
  price: number;
  unit: string;
  display: string;
}

export interface ModelPricing {
  input_token?: ModelPricingItem;
  output_token?: ModelPricingItem;
  cache_read?: ModelPricingItem;
  cache_write?: ModelPricingItem;
  audio_token?: ModelPricingItem;
  image_token?: ModelPricingItem;
}

export interface ModelSpecifications {
  context_window: number | null;
  context_window_display: string | null;
  max_output_tokens: number | null;
  max_output_tokens_display: string | null;
}

export interface RelatedModelRef {
  model_id: string;
  display_name: string;
}

export interface ModelFAQ {
  question: string;
  answer: string;
}

export interface ModelDetail {
  model_id: string;
  display_name: string;
  brand: string;
  model_type: string;
  description: string | null;
  release_date: string | null;
  specifications: ModelSpecifications;
  capabilities: string[];
  input_modalities: string[];
  output_modalities: string[];
  supported_protocols: string[];
  providers: string[];
  pricing: ModelPricing;
  related_models: {
    same_brand: RelatedModelRef[];
    similar: RelatedModelRef[];
  };
  faq: ModelFAQ[];
  code_examples: {
    python: string | null;
    curl: string | null;
    nodejs: string | null;
  };
  scraped_at: string;
}

export interface ModelIndexEntry {
  model_id: string;
  display_name: string;
  brand: string;
  model_type: string;
  file: string;
}

export interface ModelIndex {
  total_models: number;
  scraped_at: string;
  models: ModelIndexEntry[];
}

export function getProviderFromModelId(modelId: string): string {
  return modelId.split("/")[0];
}

export function getModelIdFromModelId(modelId: string): string {
  return modelId.split("/")[1];
}

export function getContextWindowDisplay(spec: ModelSpecifications): string {
  if (spec.context_window_display) return spec.context_window_display;
  if (spec.context_window) {
    const n = spec.context_window;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`.replace(/\.0/, "");
    if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
    return String(n);
  }
  return "—";
}

export function getMaxOutputDisplay(spec: ModelSpecifications): string {
  if (spec.max_output_tokens_display) return spec.max_output_tokens_display;
  if (spec.max_output_tokens) {
    const n = spec.max_output_tokens;
    if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
    return String(n);
  }
  return "—";
}

export function formatPrice(item?: ModelPricingItem): string {
  return item?.display ?? "—";
}
