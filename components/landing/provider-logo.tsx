import Image from "next/image";
import type { Provider } from "./types";

interface ProviderLogoProps {
  provider: Provider;
  size?: "sm" | "md";
  loading?: "lazy" | "eager";
}

export function ProviderLogo({
  provider,
  size = "sm",
  loading = "lazy",
}: ProviderLogoProps) {
  const imageSize = size === "md" ? "h-8 w-8" : "h-4 w-4";
  const tileSize = size === "md" ? "h-12 w-12 rounded-lg" : "h-5 w-5 rounded";
  const tilePadding = size === "md" ? "p-2" : "p-0.5";

  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-white ${tileSize} ${tilePadding}`}
      style={{ boxShadow: `inset 0 0 0 1px ${provider.accent}33` }}
    >
      <Image
        src={provider.logo}
        alt={`${provider.name} logo`}
        width={size === "md" ? 32 : 24}
        height={size === "md" ? 32 : 24}
        className={`${imageSize} object-contain`}
        loading={loading}
      />
    </span>
  );
}
