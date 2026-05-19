"use client";

import { useState } from "react";
import {
  CheckCircle2,
  CreditCard,
  Building2,
  Lock,
  ArrowRight,
} from "lucide-react";

const planDetails: Record<
  string,
  { price: string; description: string; features: string[] }
> = {
  Free: {
    price: "$0",
    description: "For testing, playground use, and personal prototypes.",
    features: [
      "1,000 requests/month",
      "Community support",
      "OpenAI-compatible endpoint",
      "Basic routing",
    ],
  },
  Builder: {
    price: "$29/month + usage",
    description:
      "For solo developers and early-stage apps that need routing, usage visibility, and basic controls.",
    features: [
      "100,000 requests/month",
      "Priority routing",
      "Usage dashboard",
      "Email support",
      "Cost controls & alerts",
      "Team workspace (1 seat)",
    ],
  },
  Team: {
    price: "$149/month + usage",
    description:
      "For growing engineering teams that need shared workspaces, budgets, role controls, and environment separation.",
    features: [
      "1,000,000 requests/month",
      "Smart routing rules",
      "Automatic fallbacks",
      "Provider pinning",
      "Team workspaces (10 seats)",
      "Role-based access",
      "Priority support",
      "Usage logs & analytics",
    ],
  },
  Enterprise: {
    price: "Custom",
    description:
      "For BYOK, dedicated routing policy, SLAs, invoicing, security review, and private deployment requirements.",
    features: [
      "Unlimited requests",
      "Dedicated routing policy",
      "BYOK support",
      "Custom SLAs",
      "Invoice billing",
      "Security review",
      "Private deployment",
      "24/7 dedicated support",
    ],
  },
};

const defaultPlan = planDetails.Builder;

export function CheckoutForm({ planName }: { planName: string }) {
  const plan = planDetails[planName] ?? defaultPlan;
  const [step, setStep] = useState<"details" | "review">("details");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      {/* Main form */}
      <div className="min-w-0 space-y-6">
        {/* Plan selection */}
        <div className="rounded-lg border border-line bg-canvas-soft p-6">
          <h2 className="text-lg font-semibold text-ink">Selected Plan</h2>
          <div className="mt-4 rounded-md border border-route/40 bg-route/10 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-ink">{planName}</p>
                <p className="mt-0.5 text-sm text-muted">{plan.description}</p>
              </div>
              <span className="shrink-0 text-xl font-semibold text-ink">
                {plan.price}
              </span>
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div className="rounded-lg border border-line bg-canvas-soft p-6">
          <h2 className="text-lg font-semibold text-ink">
            Billing Information
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-1.5 block w-full rounded-md border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-muted-dark focus:border-route focus:outline-none focus:ring-2 focus:ring-route/20"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="mt-1.5 block w-full rounded-md border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-muted-dark focus:border-route focus:outline-none focus:ring-2 focus:ring-route/20"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-muted"
              >
                Company (optional)
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Inc."
                className="mt-1.5 block w-full rounded-md border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-muted-dark focus:border-route focus:outline-none focus:ring-2 focus:ring-route/20"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="rounded-lg border border-line bg-canvas-soft p-6">
          <h2 className="text-lg font-semibold text-ink">Payment Method</h2>
          <div className="mt-4 space-y-3">
            <label className="flex cursor-pointer items-center gap-3 rounded-md border border-route/40 bg-route/10 p-4">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="h-4 w-4 accent-route"
              />
              <CreditCard size={20} className="text-route" />
              <div>
                <p className="text-sm font-medium text-ink">Credit Card</p>
                <p className="text-xs text-muted">
                  Visa, Mastercard, American Express
                </p>
              </div>
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-md border border-line bg-canvas p-4 transition hover:border-route/40">
              <input
                type="radio"
                name="payment"
                className="h-4 w-4 accent-route"
              />
              <Building2 size={20} className="text-muted" />
              <div>
                <p className="text-sm font-medium text-ink">
                  Bank Transfer / Invoice
                </p>
                <p className="text-xs text-muted">
                  Available for Team & Enterprise plans
                </p>
              </div>
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-muted"
              >
                Card number
              </label>
              <input
                id="card-number"
                type="text"
                placeholder="4242 4242 4242 4242"
                className="mt-1.5 block w-full rounded-md border border-line bg-canvas px-3 py-2.5 font-mono text-sm text-ink placeholder:text-muted-dark focus:border-route focus:outline-none focus:ring-2 focus:ring-route/20"
              />
            </div>
            <div>
              <label
                htmlFor="card-name"
                className="block text-sm font-medium text-muted"
              >
                Name on card
              </label>
              <input
                id="card-name"
                type="text"
                placeholder="John Doe"
                className="mt-1.5 block w-full rounded-md border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-muted-dark focus:border-route focus:outline-none focus:ring-2 focus:ring-route/20"
              />
            </div>
            <div>
              <label
                htmlFor="expiry"
                className="block text-sm font-medium text-muted"
              >
                Expiry date
              </label>
              <input
                id="expiry"
                type="text"
                placeholder="MM / YY"
                className="mt-1.5 block w-full rounded-md border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-muted-dark focus:border-route focus:outline-none focus:ring-2 focus:ring-route/20"
              />
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-muted"
              >
                CVC
              </label>
              <input
                id="cvc"
                type="text"
                placeholder="123"
                className="mt-1.5 block w-full rounded-md border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-muted-dark focus:border-route focus:outline-none focus:ring-2 focus:ring-route/20"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="button"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-flame px-8 font-semibold text-white shadow-flame-glow transition hover:bg-[#f3431f] focus:outline-none focus:ring-4 focus:ring-flame/20 sm:w-auto sm:min-w-[240px]"
        >
          <Lock size={16} aria-hidden="true" />
          Complete Purchase
          <ArrowRight size={16} aria-hidden="true" />
        </button>

        <p className="text-xs text-muted-dark">
          By completing your purchase, you agree to the{" "}
          <a href="/terms" className="text-route underline transition hover:text-route/80">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-route underline transition hover:text-route/80">
            Privacy Policy
          </a>
          . Your payment is processed securely via Stripe.
        </p>
      </div>

      {/* Order Summary sidebar */}
      <aside className="space-y-6">
        <div className="rounded-lg border border-line bg-canvas-soft p-6">
          <h3 className="text-sm font-semibold text-ink">Order Summary</h3>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted">{planName} Plan</span>
              <span className="font-mono text-ink">{plan.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Usage billing</span>
              <span className="font-mono text-ink">Pay as you go</span>
            </div>
            <div className="border-t border-line pt-3">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-ink">Estimated today</span>
                <span className="font-mono text-ink">
                  {plan.price === "Custom" ? "Contact sales" : plan.price.split(" ")[0]}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-canvas-soft p-6">
          <h3 className="text-sm font-semibold text-ink">What&apos;s included</h3>
          <ul className="mt-3 space-y-2.5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-route"
                />
                <span className="text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-line bg-canvas-soft p-5 text-center">
          <Lock size={18} className="mx-auto text-muted-dark" />
          <p className="mt-2 text-xs text-muted-dark">
            Secured with 256-bit TLS encryption. Your data is never shared.
          </p>
        </div>
      </aside>
    </div>
  );
}
