import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderProps {
  breadcrumbs?: BreadcrumbItem[];
  variant?: "default" | "transparent";
}

const navLinks = [
  { label: "Models", href: "/models" },
  { label: "Features", href: "/#features" },
  { label: "Docs", href: "https://docs.inferoute.ai", external: true },
  { label: "FAQ", href: "/#faq" },
];

export function Header({ breadcrumbs, variant = "default" }: HeaderProps) {
  const isTransparent = variant === "transparent";

  const content = (
    <>
      {/* Left: Logo + Nav or Breadcrumbs */}
      {breadcrumbs ? (
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href={breadcrumbs[0]?.href ?? "/"}
            className="flex shrink-0 items-center gap-2 text-sm text-muted transition hover:text-ink"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {breadcrumbs[0]?.label ?? "Home"}
          </Link>
          {breadcrumbs.slice(1).map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-2 text-sm">
              <span className="text-muted-dark">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="text-muted transition hover:text-ink truncate">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-ink truncate">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Inferoute home">
            <Image
              src="/brand/inferoute-mark.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-md"
              aria-hidden="true"
            />
            <span className="text-lg font-semibold tracking-tight text-ink">inferoute</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-ink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className="transition hover:text-ink">
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}

      {/* Right: CTA */}
      <Link
        href="/login"
        className={`shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-flame/20 ${
          isTransparent
            ? "hidden border border-line bg-canvas-soft text-ink hover:border-route/60 sm:inline-flex"
            : "bg-flame text-white shadow-flame-glow hover:bg-[#f3431f]"
        }`}
      >
        {isTransparent ? "Start free" : "Get API key"}
      </Link>
    </>
  );

  if (isTransparent) {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4">
        {content}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {content}
      </div>
    </header>
  );
}
