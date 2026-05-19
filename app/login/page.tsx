import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />

      <main className="relative flex items-center justify-center overflow-hidden px-4 py-12">
        <div className="grid-mask absolute inset-0" aria-hidden="true" />
        <LoginForm />
      </main>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Footer />
      </div>
    </div>
  );
}
