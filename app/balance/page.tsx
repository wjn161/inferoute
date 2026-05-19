import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BalanceContent } from "./balance-content";

export default function BalancePage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Balance & Billing
          </h1>
          <p className="mt-2 text-sm text-muted">
            Manage your credits, view usage, and top up your account.
          </p>
        </div>

        <BalanceContent />
      </main>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Footer />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Balance & Billing | inferoute",
  description: "Manage your inferoute account balance, view usage, and top up credits.",
};
