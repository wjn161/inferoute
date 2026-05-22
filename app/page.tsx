import {
  BadgeCheck,
  Braces,
  Code2,
  CreditCard,
  Gauge,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Route,
  ServerCog,
  TimerReset,
  WalletCards,
} from "lucide-react";
import type { Provider, Agent } from "@/components/landing/types";
import { HeroSection } from "@/components/landing/hero-section";
import { StatsSection } from "@/components/landing/stats-section";
import { ValuePropsSection } from "@/components/landing/value-props-section";
import { ModelFamiliesSection } from "@/components/landing/model-families-section";
import { AgentsSection } from "@/components/landing/agents-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ProofSection } from "@/components/landing/proof-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FaqSection } from "@/components/landing/faq-section";

const providers: Provider[] = [
  {
    name: "DeepSeek",
    description: "Depth-first reasoning and coding workloads.",
    accent: "#00d992",
    logo: "/providers/deepseek.svg",
  },
  {
    name: "Qwen",
    description: "Multilingual, agentic, and general chat tasks.",
    accent: "#bdbbff",
    logo: "/providers/qwen.svg",
  },
  {
    name: "Kimi",
    description: "Long-context analysis and document workflows.",
    accent: "#ffb83e",
    logo: "/providers/kimi.svg",
  },
  {
    name: "GLM",
    description: "Structured generation and application assistants.",
    accent: "#ea2804",
    logo: "/providers/glm.svg",
  },
  {
    name: "MiniMax",
    description: "Dialogue, multimodal, and agent application workloads.",
    accent: "#22d3ee",
    logo: "/providers/minimax.svg",
  },
  {
    name: "Doubao",
    description: "ByteDance model family for general and creative generation.",
    accent: "#4ade80",
    logo: "/providers/seed.svg",
  },
  {
    name: "Xiaomi",
    description: "Consumer AI, assistant, and device-adjacent workflows.",
    accent: "#ff6900",
    logo: "/providers/xiaomi.svg",
  },
  {
    name: "Kling",
    description: "Kuaishou model family for visual and creative pipelines.",
    accent: "#60a5fa",
    logo: "/providers/kling.svg",
  },
];

const agents: Agent[] = [
  {
    name: "Hermes Agent",
    description: "Open-source self-improving AI agent by Nous Research with skill creation, multi-channel messaging, and multi-provider LLM integration.",
    accent: "#8b5cf6",
    logo: "/agents/hermes.svg",
  },
  {
    name: "OpenClaw",
    description: "Self-hosted personal AI assistant operating across WhatsApp, Telegram, Discord, Slack, and Signal with voice, memory, and extensible plugins.",
    accent: "#f97316",
    logo: "/agents/openclaw.svg",
  },
  {
    name: "Kilo Code",
    description: "Open-source agentic coding platform for VS Code, JetBrains, and CLI — the all-in-one engineering agent by Kilo.",
    accent: "#06b6d4",
    logo: "/agents/kilo-code.svg",
  },
  {
    name: "Claude Code",
    description: "Anthropic's agentic coding tool that reads codebases, edits files, runs commands, and integrates with git/GitHub across terminal, IDE, and web.",
    accent: "#d97706",
    logo: "/agents/claude-code.svg",
  },
  {
    name: "Pi",
    description: "A personal AI companion by Inflection AI — a coach, confidante, creative partner, and sounding board with high emotional intelligence.",
    accent: "#ec4899",
    logo: "/agents/pi.svg",
  },
  {
    name: "Descript",
    description: "AI-powered video and podcast editor that lets you edit media by editing text, with transcription, screen recording, and AI voice cloning.",
    accent: "#ef4444",
    logo: "/agents/descript.svg",
  },
];

const valueProps = [
  {
    icon: WalletCards,
    title: "Cheaper by default",
    description:
      "Send simple requests to lower-cost models and reserve premium models for the prompts that actually need them. Stop overpaying for routine work.",
  },
  {
    icon: Braces,
    title: "Compatible with your current stack",
    description:
      "If your app already speaks the OpenAI format, you should not need a rewrite. Migrate with a config change, not a platform migration.",
  },
  {
    icon: LockKeyhole,
    title: "Control without lock-in",
    description:
      "Pin providers, define routing rules, monitor usage, and keep an exit path. Your application should own the interface, not the vendor.",
  },
];

const modules = [
  {
    icon: Network,
    title: "Unified Endpoint",
    description:
      "One API for multiple open and frontier-compatible model backends.",
  },
  {
    icon: Route,
    title: "Smart Routing Rules",
    description:
      "Route by task type, latency target, budget, provider, or model family.",
  },
  {
    icon: TimerReset,
    title: "Automatic Fallbacks",
    description:
      "Keep production traffic moving when a provider slows down or fails.",
  },
  {
    icon: BadgeCheck,
    title: "Provider Pinning",
    description:
      "Stay on the provider you trust for speed, caching, compliance, or cost.",
  },
  {
    icon: CreditCard,
    title: "Cost Controls",
    description:
      "Caps, alerts, per-project usage views, and team-level visibility.",
  },
  {
    icon: Code2,
    title: "OpenAI Compatibility",
    description: "Keep your existing SDKs, wrappers, and prompt pipelines.",
  },
  {
    icon: Gauge,
    title: "Usage Logs",
    description:
      "Inspect request path, provider choice, cost, and response timing.",
  },
  {
    icon: Layers3,
    title: "Team Workspaces",
    description:
      "Separate keys, environments, and billing for dev, staging, and prod.",
  },
  {
    icon: KeyRound,
    title: "BYOK Ready",
    description:
      "Bring your own model keys when you need vendor-level control.",
  },
  {
    icon: ServerCog,
    title: "Docs First",
    description:
      "Quickstart, curl examples, SDK snippets, and migration guides.",
  },
];

const proofBadges = [
  "OpenAI SDK style workflows",
  "Agent-based apps",
  "Coding assistants",
  "LangChain / orchestration stacks",
  "Production API teams",
];

const faqs = [
  {
    question: "What is Inferoute?",
    answer:
      "Inferoute is an AI gateway that routes requests across models and providers through one OpenAI-compatible interface.",
  },
  {
    question: "Why not just call one provider directly?",
    answer:
      "Because one provider is rarely the best answer for every workload, every week, and every budget.",
  },
  {
    question: "Do I need to rewrite my app?",
    answer:
      "Not if you already use an OpenAI-style client pattern. The goal is migration with minimal application change.",
  },
  {
    question: "Can I force traffic to a specific provider?",
    answer:
      "Yes. You should be able to pin, prefer, or exclude providers based on trust, cost, or performance.",
  },
  {
    question: "Is this only for open-source models?",
    answer:
      "No. Inferoute is open-model-first, but the architecture is designed to remain multi-provider and future-proof.",
  },
  {
    question: "Can I control spend?",
    answer:
      "Yes. Budgets, alerts, per-project usage views, and routing rules should be core product behavior, not add-ons.",
  },
  {
    question: "How is this different from OpenRouter?",
    answer:
      "Inferoute is positioned around control: more explicit routing policy, clearer team controls, and stronger visibility into exactly where each request went.",
  },
  {
    question: "How do I know which model was used?",
    answer:
      "Every request should show model, provider path, latency, and estimated cost in the logs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Inferoute",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "An OpenAI-compatible AI gateway for routing prompts across modern open models with cost controls, fallbacks, and provider visibility.",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection providers={providers} />
      <StatsSection />
      <ValuePropsSection valueProps={valueProps} />
      <ModelFamiliesSection providers={providers} />
      <AgentsSection agents={agents} />
      <FeaturesSection modules={modules} />
      <ProofSection proofBadges={proofBadges} />
      <CtaSection />
      <FaqSection faqs={faqs} />
    </main>
  );
}
