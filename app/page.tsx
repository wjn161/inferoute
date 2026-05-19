import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Braces,
  CheckCircle2,
  Code2,
  CreditCard,
  Gauge,
  Globe,
  KeyRound,
  Layers3,
  LockKeyhole,
  LogIn,
  Network,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TimerReset,
  WalletCards,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const providers: {
  name: string;
  description: string;
  accent: string;
  logo: string;
}[] = [
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
    "An OpenAI-compatible AI gateway for routing prompts across modern open models with cost controls, fallbacks, and provider visibility."
};

function ProviderLogo({
  provider,
  size = "sm",
}: {
  provider: (typeof providers)[number];
  size?: "sm" | "md";
}) {
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
        loading="lazy"
      />
    </span>
  );
}

function CodePanel() {
  return (
    <div
      id="quickstart"
      className="w-full max-w-full min-w-0 overflow-hidden rounded-lg border border-line bg-[#0a0c0c] shadow-glow"
    >
      <div className="flex items-center justify-between border-b border-line bg-canvas-soft px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-flame" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-route" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          Quickstart
        </span>
      </div>
      <pre className="max-w-full overflow-x-auto p-4 text-[12px] leading-6 text-ink sm:p-6 sm:text-[13px]">
        <code>{`import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.INFEROUTE_API_KEY,
  baseURL: "https://api.inferoute.ai/v1"
});

const response = await client.chat.completions.create({
  model: "inferoute/auto",
  messages: [
    { role: "user", content: "Refactor this agent workflow." }
  ],
  routing: {
    max_cost: "builder",
    fallback: "fastest_available",
    prefer: ["deepseek", "qwen", "kimi", "glm", "minimax", "xiaomi", "seed", "kling"]
  }
});`}</code>
      </pre>
    </div>
  );
}

function RoutingDiagram() {
  return (
    <div className="rounded-lg border border-line bg-canvas-soft p-4 sm:p-5">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0 rounded-md border border-line bg-canvas p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-canvas-raised text-route">
              <TerminalSquare size={20} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                One endpoint
              </p>
              <p className="mt-1 truncate text-sm font-semibold text-ink">
                /v1/chat/completions
              </p>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 items-center gap-3 rounded-md border border-route/40 bg-route/10 p-3 text-route">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-canvas">
            <Workflow size={22} aria-hidden="true" />
          </div>
          <div className="min-w-0 sm:hidden lg:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-route">
              Router
            </p>
            <p className="mt-1 text-sm font-semibold text-ink">Policy engine</p>
          </div>
        </div>
      </div>

      <div className="my-3 flex items-center gap-3" aria-hidden="true">
        <div className="h-px flex-1 route-line" />
        <div className="h-2 w-2 rounded-full bg-route" />
        <div className="h-px flex-1 route-line" />
      </div>

      <div className="grid min-w-0 grid-cols-2 gap-2 lg:grid-cols-4">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className="min-w-0 overflow-hidden rounded-md border border-line bg-[#0c0f0f] px-1 py-1.5"
            style={{ boxShadow: `inset 0 0 0 1px ${provider.accent}22` }}
          >
            <div className="flex min-w-0 items-center gap-1">
              <ProviderLogo provider={provider} />
              <span
                className="block min-w-0 truncate text-[11px] font-semibold leading-5 text-ink"
                title={provider.name}
              >
                {provider.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative border-b border-line">
        <div className="grid-mask absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col px-4 py-5 sm:px-6 lg:px-8">
          <Header variant="transparent" />

          <div className="grid min-w-0 flex-1 items-center gap-10 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-20">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas-soft px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-route">
                <Sparkles size={13} aria-hidden="true" />
                AI gateway for production model routing
              </div>
              <h1 className="mt-7 max-w-4xl text-4xl font-normal leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl sm:leading-[0.98] lg:text-7xl">
                Route every prompt to the best open model.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Inferoute is an OpenAI-compatible AI gateway for teams that want
                lower cost, faster fallback, and full control across modern open
                models.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Use one endpoint to access the models you actually want to ship
                with, without rewriting your stack every time the market moves.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/login"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-flame px-6 font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20"
                >
                  Start building free
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <Link
                  href="/models"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-line bg-canvas-soft px-6 font-semibold text-ink transition hover:border-route/60"
                >
                  <Code2 size={18} aria-hidden="true" />
                  Explore Models
                </Link>
              </div>
              <div className="mt-8 rounded-md border border-line bg-canvas-soft px-4 py-3 text-sm leading-6 text-muted">
                Built for AI developers using agents, coding assistants, and
                production workflows.
              </div>
            </div>
            <div className="min-w-0 space-y-4">
              <CodePanel />
              <RoutingDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-[#0c0f0f]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-line bg-canvas-soft p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-route/10 text-route">
                <Zap size={24} />
              </div>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-ink">
                90+
              </p>
              <p className="mt-2 text-sm text-muted">Models available across major Chinese AI providers</p>
            </div>
            <div className="rounded-lg border border-line bg-canvas-soft p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-flame/10 text-flame">
                <Globe size={24} />
              </div>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-ink">
                8+
              </p>
              <p className="mt-2 text-sm text-muted">Provider families routed through one endpoint</p>
            </div>
            <div className="rounded-lg border border-line bg-canvas-soft p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber/10 text-amber">
                <BarChart3 size={24} />
              </div>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-ink">
                10M+
              </p>
              <p className="mt-2 text-sm text-muted">Requests processed monthly across all providers</p>
            </div>
            <div className="rounded-lg border border-line bg-canvas-soft p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-route/10 text-route">
                <ShieldCheck size={24} />
              </div>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-ink">
                99.9%
              </p>
              <p className="mt-2 text-sm text-muted">Uptime with automatic provider fallback</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-3 lg:grid-cols-3">
            {valueProps.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-line bg-canvas-soft p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-route/10 text-route">
                  <item.icon size={20} aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-ink">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="models" className="border-b border-line bg-[#101211]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
              Model families
            </p>
            <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
              Open-model-first, multi-provider by design.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Start with open model families, keep explicit routing control, and
              avoid rebuilding your product around whichever provider wins this
              month.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {providers.map((provider) => (
              <article
                key={provider.name}
                className="rounded-lg border border-line bg-canvas p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <ProviderLogo provider={provider} size="md" />
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{
                      backgroundColor: `${provider.accent}16`,
                      color: provider.accent,
                    }}
                  >
                    Routable
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {provider.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {provider.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
              Gateway modules
            </p>
            <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
              Everything around the model call matters.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {modules.map((module) => (
              <article
                key={module.title}
                className="rounded-lg border border-line bg-canvas-soft p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-route/10 text-route">
                  <module.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {module.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-line bg-canvas">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
              Made for the workflows developers already use
            </p>
            <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
              OpenAI-style interface. Routing controls. Cost visibility.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Migration-ready docs, coding workflow support, agent pipeline
              controls, and multi-model visibility for production API teams.
            </p>
          </div>
          <div className="grid content-start gap-3 sm:grid-cols-2">
            {proofBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-md border border-line bg-canvas-soft px-4 py-3 text-sm text-muted"
              >
                <CheckCircle2 className="h-4 w-4 text-route" aria-hidden="true" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-[#111413]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
              Start building
            </p>
            <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
              Stop choosing one model too early.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              The model market moves every week. Your product should not have
              to. Start with one endpoint, route smarter over time, and keep
              your architecture flexible.
            </p>
            <a
              href="/login"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-flame px-8 font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20"
            >
              <LogIn size={18} aria-hidden="true" />
              Sign in to get your API key
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <div className="mt-8 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle2 className="h-4 w-4 text-route" aria-hidden="true" />
                Free to start
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle2 className="h-4 w-4 text-route" aria-hidden="true" />
                No credit card required
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle2 className="h-4 w-4 text-route" aria-hidden="true" />
                OpenAI compatible
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-canvas">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
              Built for teams evaluating LLM API infrastructure.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border border-line bg-canvas-soft p-5"
              >
                <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
