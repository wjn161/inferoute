import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://inferoute.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Inferoute | OpenAI-compatible AI gateway for open models",
    template: "%s | inferoute",
  },
  description:
    "Inferoute is an OpenAI-compatible AI gateway for teams that want lower cost, faster fallback, and full control across modern open models.",
  keywords: [
    "AI gateway",
    "OpenAI compatible API",
    "LLM routing",
    "model routing",
    "AI fallback",
    "LLM cost controls",
    "DeepSeek API",
    "Qwen API",
    "Kimi API",
    "GLM API",
    "MiniMax API",
    "Xiaomi AI API",
    "Doubao Seed API",
    "Kling API",
    "open model API",
  ],
  applicationName: "inferoute",
  authors: [{ name: "inferoute" }],
  creator: "inferoute",
  publisher: "inferoute",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Inferoute | Route every prompt to the best open model",
    description:
      "An OpenAI-compatible AI gateway for lower cost, faster fallback, and full control across modern open models.",
    siteName: "inferoute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inferoute | Route every prompt to the best open model",
    description:
      "An OpenAI-compatible AI gateway for lower cost, faster fallback, and full control across modern open models.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
