import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckoutForm } from "./checkout-form";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  const planName = plan ?? "Builder";

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Checkout
          </h1>
          <p className="mt-2 text-sm text-muted">
            Complete your subscription to get started.
          </p>
        </div>

        <CheckoutForm planName={planName} />
      </main>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Footer />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Checkout | inferoute",
  description: "Complete your inferoute subscription.",
};
