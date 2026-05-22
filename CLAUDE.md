# inferoute

AI model gateway landing page and model catalog — an OpenAI-compatible routing layer for Chinese LLM providers, targeting Western developers.

## Tech Stack

- **Next.js 15.4** (App Router, React 19, TypeScript 5.7, strict mode)
- **Tailwind CSS v3** with custom dark design system (no CSS modules, no plugins)
- **lucide-react** for all icons
- **No database, no auth backend, no state management, no form library, no API client**
- Output: `standalone` (Docker-ready)

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # ESLint (zero warnings required)
pnpm typecheck  # tsc --noEmit
```

## Project Structure

```
app/
  page.tsx                  # Landing page (745 lines, single server component)
  layout.tsx                # Root layout (Inter + JetBrains Mono fonts, metadata)
  globals.css               # Tailwind directives, body gradients, code token colors
  models/page.tsx           # Model catalog (SSR, reads JSON from /data/models/)
  models/[provider]/[modelId]/page.tsx  # Model detail (SSR, dynamic metadata)
  login/page.tsx            # Login page (UI only, not wired to backend)
  balance/page.tsx          # Balance & billing (mock data, not wired)
  checkout/page.tsx         # Checkout flow (mock data, not wired)
  api/notify/route.ts       # POST /api/notify — lead capture (only functioning backend)

components/
  header.tsx                # Sticky nav (default + transparent variants)
  footer.tsx                # 4-column link footer
  model-list.tsx            # Model catalog with filters, search, card grid
  copy-button.tsx           # Copy-to-clipboard with icon feedback
  login-form.tsx            # OAuth + email login form (mock)
  api-key-form.tsx          # API key request form → /api/notify
  checkout-form.tsx         # Payment form (mock)

lib/
  models.ts                 # ModelDetail, ModelIndex types + parsing utilities

data/models/                # 51 static JSON files from scraper + _index.json
  scraper.mjs               # Node.js scraper for ofox.ai model data

public/
  providers/                # 8 provider SVG logos
  agents/                   # 6 featured agent SVG logos
  brand/                    # inferoute brand SVG
```

## Design System

Custom dark theme defined in `tailwind.config.ts`. All Tailwind class names reference these tokens:

| Token | Hex | Usage |
|---|---|---|
| `canvas` | `#0d0f0f` | Page background |
| `canvas-soft` | `#151817` | Card surfaces |
| `line` | `#303836` | Borders/dividers |
| `ink` | `#f5f7f5` | Primary text |
| `muted` | `#a8b2ad` | Secondary text |
| `route` | `#00d992` | Brand green (primary accent) |
| `flame` | `#ea2804` | CTA red |

Fonts: `font-sans` (Inter), `font-mono` (JetBrains Mono).

Shadows: `shadow-glow` (green), `shadow-flame-glow` (red CTA).

## Page Section Convention

Every landing page section follows this skeleton:

```tsx
<section id="section-id" className="border-b border-line bg-canvas">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-route">
        SECTION OVERLINE
      </p>
      <h2 className="mt-4 text-3xl font-normal tracking-[-0.01em] text-ink sm:text-5xl">
        Section heading
      </h2>
      <p className="mt-5 text-base leading-7 text-muted">
        Section subtitle
      </p>
    </div>
    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {/* cards */}
    </div>
  </div>
</section>
```

Card pattern (icon + title + description):

```tsx
<article className="rounded-lg border border-line bg-canvas-soft p-5">
  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-route/10 text-route">
    <IconComponent size={20} aria-hidden="true" />
  </div>
  <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
  <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
</article>
```

## Conventions

- **Data before markup**: Content arrays defined as `const` at module scope, then `.map()` in JSX
- **Single-file sections**: The landing page is one file; sub-components live in the same file
- **Server components by default**: Client components only when interactivity is needed (`"use client"`)
- **All SVGs local**: No remote images; all logos stored in `/public/`
- **Paths**: `@/*` alias maps to project root; use `@/components/header`, `@/lib/models`, etc.
- **No hardcoded colors**: Always use Tailwind design tokens (`text-muted`, not `text-gray-400`)
- **Responsive**: Mobile-first with breakpoints at `sm:`, `md:`, `lg:`, `xl:`
- **`min-w-0`** on flex/grid children to prevent overflow
- **`shrink-0`** on logos/icons to prevent squishing

## Key Patterns

### Adding a new landing page section
1. Define data array at top of `app/page.tsx`
2. Add `<section>` block after the last section, following the skeleton above
3. Match existing card/grid patterns

### Adding a new route
1. Create `app/<route>/page.tsx` as a server component
2. Client interactivity goes in a separate `"use client"` component under `components/`

### Model data
All model info comes from static JSON in `data/models/`. To add/refresh models, run `node data/models/scraper.mjs`. The model catalog reads these at build/render time via `fs.readFileSync`.

## Current State

- **Wired**: Landing page, model catalog, model detail pages, `/api/notify` lead capture
- **Mock/UI only**: Login, checkout, balance pages (no backend, no auth, no payment)
- **No env vars required** for dev; only `INFEROUTE_NOTIFY_ENDPOINT` for production notifications
