"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ApiKeyForm() {
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!emailPattern.test(email)) {
      setError("Enter a valid work email.");
      setIsSubmitted(false);
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, useCase }),
      });
    } catch {
      // Non-blocking: continue to success state even if notify fails
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
    setUseCase("");
  }

  return (
    <form
      id="api-key"
      onSubmit={handleSubmit}
      className="rounded-lg border border-line bg-canvas-soft p-4 shadow-glow sm:p-5"
      noValidate
    >
      <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
            API access
          </p>
          <h2 className="mt-1 text-lg font-semibold text-ink">
            Create your API key and start routing.
          </h2>
        </div>
        {isSubmitted ? (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-route text-canvas">
            <Check size={18} strokeWidth={2.4} aria-hidden="true" />
          </div>
        ) : null}
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-medium text-ink">Work email</span>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          className="mt-2 h-12 w-full rounded-md border border-line bg-canvas px-4 text-sm text-ink outline-none transition placeholder:text-muted-dark focus:border-route focus:ring-4 focus:ring-route/10"
          aria-describedby={error ? "api-key-error" : undefined}
        />
      </label>

      <label className="mt-3 block">
        <span className="text-sm font-medium text-ink">What are you building?</span>
        <input
          value={useCase}
          onChange={(event) => setUseCase(event.target.value)}
          type="text"
          placeholder="Agents, coding assistants, evals, production APIs..."
          className="mt-2 h-12 w-full rounded-md border border-line bg-canvas px-4 text-sm text-ink outline-none transition placeholder:text-muted-dark focus:border-route focus:ring-4 focus:ring-route/10"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-flame px-5 font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Creating
          </>
        ) : (
          <>
            Create your API key
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      {error ? (
        <p id="api-key-error" className="mt-3 text-sm text-[#ff8c72]">
          {error}
        </p>
      ) : null}
      {isSubmitted ? (
        <p className="mt-3 text-sm text-route">
          Request received. We will send setup details for your Inferoute API
          key.
        </p>
      ) : null}
    </form>
  );
}
