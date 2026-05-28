"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, Chrome, Github, Eye, EyeOff, Loader2, Check } from "lucide-react";
import Image from "next/image";

export function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleEmailSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!agreed) return;
    setIsSubmitting(true);
    try {
      // TODO: integrate backend signup
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="rounded-xl border border-line bg-canvas-soft p-6 shadow-glow sm:p-8">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/inferoute-mark.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg"
            aria-hidden="true"
          />
          <span className="text-xl font-semibold tracking-tight text-ink">inferoute</span>
        </div>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
          Create your inferoute account
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted">
          Start routing prompts across 90+ open models in minutes — no credit card required.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-3 rounded-md border border-line bg-canvas text-sm font-medium text-ink transition hover:border-route/60 hover:bg-canvas-raised focus:outline-none focus:ring-4 focus:ring-route/10"
          >
            <Chrome size={18} aria-hidden="true" />
            Sign up with Google
          </button>
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-3 rounded-md border border-line bg-canvas text-sm font-medium text-ink transition hover:border-route/60 hover:bg-canvas-raised focus:outline-none focus:ring-4 focus:ring-route/10"
          >
            <Github size={18} aria-hidden="true" />
            Sign up with GitHub
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-line" />
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-dark">
            or sign up with email
          </span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <form onSubmit={handleEmailSignup} className="mt-5 flex flex-col gap-4" noValidate>
          <label className="block">
            <span className="text-sm font-medium text-ink">Full name</span>
            <input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              type="text"
              autoComplete="name"
              placeholder="Ada Lovelace"
              required
              className="mt-2 h-11 w-full rounded-md border border-line bg-canvas px-4 text-sm text-ink outline-none transition placeholder:text-muted-dark focus:border-route focus:ring-4 focus:ring-route/10"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-ink">Work email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
              className="mt-2 h-11 w-full rounded-md border border-line bg-canvas px-4 text-sm text-ink outline-none transition placeholder:text-muted-dark focus:border-route focus:ring-4 focus:ring-route/10"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-ink">Password</span>
            <div className="relative mt-2">
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="At least 8 characters"
                minLength={8}
                required
                className="h-11 w-full rounded-md border border-line bg-canvas pl-4 pr-10 text-sm text-ink outline-none transition placeholder:text-muted-dark focus:border-route focus:ring-4 focus:ring-route/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-dark transition hover:text-muted"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
              </button>
            </div>
            <span className="mt-2 block text-xs text-muted-dark">
              Use 8 or more characters with a mix of letters, numbers, and symbols.
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted">
            <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-line bg-canvas transition checked:border-route checked:bg-route focus:outline-none focus:ring-4 focus:ring-route/10"
              />
              <Check
                size={12}
                strokeWidth={3}
                className="pointer-events-none absolute text-canvas-raised opacity-0 transition peer-checked:opacity-100"
                aria-hidden="true"
              />
            </span>
            <span>
              I agree to the{" "}
              <Link href="/terms" className="text-ink underline transition hover:text-route">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-ink underline transition hover:text-route">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting || !agreed}
            className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-flame px-5 font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Creating account
              </>
            ) : (
              <>
                Create account
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-route transition hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
