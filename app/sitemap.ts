import type { MetadataRoute } from "next";
import { loadModelIndex } from "@/lib/models-server";

const SITE_URL = "https://inferoute.ai";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const index = await loadModelIndex();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/models`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/dpa`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const modelPages: MetadataRoute.Sitemap = index.models.map((entry) => {
    const [provider, ...rest] = entry.model_id.split("/");
    const modelId = rest.join("/");
    return {
      url: `${SITE_URL}/models/${provider}/${modelId}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...modelPages];
}
