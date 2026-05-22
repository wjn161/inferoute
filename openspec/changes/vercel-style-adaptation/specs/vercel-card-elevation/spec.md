## ADDED Requirements

### Requirement: Layered card shadow stack
Marketing section cards SHALL use a layered micro-shadow stack instead of flat border-only styling. The shadow stack MUST include: an inset hairline (white at 4% opacity), a tight shadow (0 2px 2px rgba(0,0,0,0.25)), and a soft spread (0 8px 8px rgba(0,0,0,0.15)). The shadow MUST be defined as a Tailwind custom utility or CSS custom property.

#### Scenario: Cards render with layered shadow
- **WHEN** a marketing card (value prop, feature module, FAQ, model family) renders
- **THEN** the card has a visible inset hairline edge and subtle depth shadow, replacing the previous flat `border border-line` styling

#### Scenario: Shadow stack defined as reusable token
- **WHEN** the shadow stack is inspected in CSS
- **THEN** it is defined as a CSS custom property `--shadow-card` in `globals.css` and/or as a Tailwind `shadow-card` utility in `tailwind.config.ts`

### Requirement: Card border-radius increase to 12px
All marketing section cards SHALL use `rounded-xl` (12px border-radius), increased from the current `rounded-lg` (8px). This applies to: value prop cards, model family cards, agent cards, feature module cards, proof badges, and FAQ cards.

#### Scenario: Marketing cards use 12px radius
- **WHEN** any marketing card renders
- **THEN** its border-radius is 12px (`rounded-xl`)

#### Scenario: Non-marketing components unchanged
- **WHEN** header, footer, or code panel components render
- **THEN** their border-radius values are unchanged from current state

### Requirement: Pill CTA buttons for primary marketing actions
Primary marketing CTA buttons SHALL use `rounded-[100px]` (pill shape). This applies to: hero "Start building free" button, hero "Explore Models" button, and CTA section "Sign in to get your API key" button. Secondary and product UI buttons SHALL retain their current radius.

#### Scenario: Hero CTAs are pill-shaped
- **WHEN** the hero section renders
- **THEN** both the "Start building free" and "Explore Models" buttons have a pill shape with ~100px border-radius

#### Scenario: CTA section button is pill-shaped
- **WHEN** the CTA section renders
- **THEN** the "Sign in to get your API key" button has a pill shape with ~100px border-radius

#### Scenario: Product buttons stay rectangular
- **WHEN** header "Get API key" or login form buttons render
- **THEN** they retain their current `rounded-md` (6px) border-radius

### Requirement: Featured card inversion
Within card grid sections, one card per section MAY be marked as "featured" with inverted styling: `bg-route/10` background and `border-route/30` border, replacing the standard `bg-canvas-soft` and `border-line`. Featured cards SHALL be the first card in the Model Families grid (DeepSeek) and the first card in the Features grid (Unified Endpoint).

#### Scenario: Featured model family card uses route-green tint
- **WHEN** the Model Families section renders
- **THEN** the DeepSeek card (first card) has a `bg-route/10` background and `border-route/30` border, visually distinct from other cards

#### Scenario: Featured feature card uses route-green tint
- **WHEN** the Features section renders
- **THEN** the Unified Endpoint card (first card) has a `bg-route/10` background and `border-route/30` border

#### Scenario: Non-featured cards unchanged
- **WHEN** the card grids render
- **THEN** all non-featured cards use the standard `bg-canvas-soft` (or `bg-canvas` depending on polarity) with the new shadow stack
