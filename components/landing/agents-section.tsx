import Image from "next/image";
import type { Agent } from "./types";

interface AgentsSectionProps {
  agents: Agent[];
}

export function AgentsSection({ agents }: AgentsSectionProps) {
  return (
    <section id="agents" className="border-b border-line bg-canvas">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
            Featured agents
          </p>
          <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
            Power AI Agents at Lower Cost and Higher Efficiency
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            From coding agents to creative tools, these are the applications
            pushing the frontier — all powered by the models you route through
            inferoute.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <article
              key={agent.name}
              className="rounded-lg border border-line bg-canvas-soft p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-2"
                  style={{ boxShadow: `inset 0 0 0 1px ${agent.accent}33` }}
                >
                  <Image
                    src={agent.logo}
                    alt={`${agent.name} logo`}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                    loading="lazy"
                  />
                </span>
                <h3 className="text-xl font-semibold text-ink">
                  {agent.name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                {agent.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
