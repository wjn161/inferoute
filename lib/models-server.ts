import "server-only";

import fs from "fs/promises";
import path from "path";
import { z } from "zod";
import type { ModelDetail, ModelIndex } from "./models";

const MODELS_DIR = path.join(process.cwd(), "data/models");

// ---------------------------------------------------------------------------
// Zod schemas (server-only — not sent to the client bundle)
// ---------------------------------------------------------------------------

const ModelPricingItemSchema = z.object({
  price: z.number(),
  unit: z.string(),
  display: z.string(),
});

const ModelPricingSchema = z.object({
  input_token: ModelPricingItemSchema.optional(),
  output_token: ModelPricingItemSchema.optional(),
  cache_read: ModelPricingItemSchema.optional(),
  cache_write: ModelPricingItemSchema.optional(),
  audio_token: ModelPricingItemSchema.optional(),
  image_token: ModelPricingItemSchema.optional(),
});

const ModelSpecificationsSchema = z.object({
  context_window: z.number().nullable(),
  context_window_display: z.string().nullable(),
  max_output_tokens: z.number().nullable(),
  max_output_tokens_display: z.string().nullable(),
});

const RelatedModelRefSchema = z.object({
  model_id: z.string(),
  display_name: z.string(),
});

const ModelFAQSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const ModelDetailSchema = z.object({
  model_id: z.string(),
  display_name: z.string(),
  brand: z.string(),
  model_type: z.string(),
  description: z.string().nullable(),
  release_date: z.string().nullable(),
  specifications: ModelSpecificationsSchema,
  capabilities: z.array(z.string()),
  input_modalities: z.array(z.string()),
  output_modalities: z.array(z.string()),
  supported_protocols: z.array(z.string()),
  providers: z.array(z.string()),
  pricing: ModelPricingSchema,
  related_models: z.object({
    same_brand: z.array(RelatedModelRefSchema),
    similar: z.array(RelatedModelRefSchema),
  }),
  faq: z.array(ModelFAQSchema).optional().default([]),
  code_examples: z.object({
    python: z.string().nullable(),
    curl: z.string().nullable(),
    nodejs: z.string().nullable(),
  }),
  scraped_at: z.string().nullable(),
});

const ModelIndexEntrySchema = z.object({
  model_id: z.string(),
  display_name: z.string(),
  brand: z.string(),
  model_type: z.string(),
  file: z.string(),
  sort_order: z.number(),
});

const ModelIndexSchema = z.object({
  total_models: z.number(),
  scraped_at: z.string(),
  models: z.array(ModelIndexEntrySchema),
});

// ---------------------------------------------------------------------------
// Async file-loading utilities
// ---------------------------------------------------------------------------

export async function loadModelIndex(): Promise<ModelIndex> {
  const raw = await fs.readFile(path.join(MODELS_DIR, "_index.json"), "utf-8");
  const parsed = JSON.parse(raw);
  const result = ModelIndexSchema.safeParse(parsed);
  if (!result.success) {
    console.error("loadModelIndex: validation failed", result.error.flatten());
    throw new Error("Model index validation failed");
  }
  return result.data;
}

export async function loadModelDetail(
  provider: string,
  modelId: string,
): Promise<ModelDetail | null> {
  const fileName = `${provider}--${modelId}.json`;
  const filePath = path.join(MODELS_DIR, fileName);

  let raw: string;
  try {
    raw = await fs.readFile(filePath, "utf-8");
  } catch {
    return null;
  }

  const parsed = JSON.parse(raw);
  const result = ModelDetailSchema.safeParse(parsed);
  if (!result.success) {
    console.error(
      `loadModelDetail: validation failed for ${fileName}`,
      result.error.flatten(),
    );
    return null;
  }

  return result.data;
}
