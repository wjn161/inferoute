import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SignupForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Sign up | inferoute",
  description:
    "Create your inferoute account and route prompts across 90+ open models with one OpenAI-compatible API.",
  alternates: { canonical: "https://inferoute.ai/signup" },
  robots: { index: false, follow: true },
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />

      <main className="relative flex items-center justify-center overflow-hidden px-4 py-12">
        <div className="grid-mask absolute inset-0" aria-hidden="true" />
        <SignupForm />
      </main>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Footer />
      </div>
    </div>
  );
}
