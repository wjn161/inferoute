"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Chrome, Github, Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleEmailLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    // TODO: integrate backend auth
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
          Sign in to your account
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted">
          Access your API keys, usage dashboard, and routing controls.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-3 rounded-md border border-line bg-canvas text-sm font-medium text-ink transition hover:border-route/60 hover:bg-canvas-raised focus:outline-none focus:ring-4 focus:ring-route/10"
          >
            <Chrome size={18} aria-hidden="true" />
            Continue with Google
          </button>
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center gap-3 rounded-md border border-line bg-canvas text-sm font-medium text-ink transition hover:border-route/60 hover:bg-canvas-raised focus:outline-none focus:ring-4 focus:ring-route/10"
          >
            <Github size={18} aria-hidden="true" />
            Continue with GitHub
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-line" />
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-dark">
            or continue with email
          </span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <form onSubmit={handleEmailLogin} className="mt-5 flex flex-col gap-4" noValidate>
          <label className="block">
            <span className="text-sm font-medium text-ink">Email address</span>
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
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-ink">Password</span>
              <a href="/forgot-password" className="text-xs text-muted transition hover:text-route">
                Forgot password?
              </a>
            </div>
            <div className="relative mt-2">
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
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
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-flame px-5 font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Signing in
              </>
            ) : (
              <>
                Sign in
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="font-medium text-route transition hover:underline">
            Create one
          </a>
        </p>
      </div>

      <p className="mt-6 text-center text-xs text-muted-dark">
        Protected by reCAPTCHA and subject to the{" "}
        <a href="/privacy" className="underline transition hover:text-muted">Privacy Policy</a>{" "}
        and{" "}
        <a href="/terms" className="underline transition hover:text-muted">Terms of Service</a>
        .
      </p>
    </div>
  );
}
