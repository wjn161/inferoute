const SITE_URL = "https://inferoute.ai";

interface OgImageParams {
  title: string;
  description?: string;
  brand?: string;
}

export function getOgImageUrl(params: OgImageParams): string {
  const searchParams = new URLSearchParams();
  searchParams.set("title", params.title);
  if (params.description) searchParams.set("description", params.description);
  if (params.brand) searchParams.set("brand", params.brand);
  return `${SITE_URL}/api/og?${searchParams.toString()}`;
}
