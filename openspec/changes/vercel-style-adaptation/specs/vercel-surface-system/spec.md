## ADDED Requirements

### Requirement: Hero atmospheric mesh gradient
The hero section SHALL render a CSS-only atmospheric mesh gradient composed of 2-3 overlapping radial-gradient layers positioned behind the hero content. The gradient MUST use inferoute brand colors: route-green (#00d992) at 12-15% opacity, flame-red (#ea2804) at 10-12% opacity, and periwinkle (#bdbbff) at 8% opacity. The gradient MUST be defined in `globals.css` and applied to the hero section only.

#### Scenario: Mesh gradient renders in hero
- **WHEN** the hero section loads
- **THEN** a multi-layered radial gradient is visible behind hero content using route-green, flame-red, and periwinkle colors at the specified opacities

#### Scenario: Mesh gradient has zero performance cost
- **WHEN** the hero section renders on a low-end mobile device (Moto G class)
- **THEN** the gradient renders using CSS-only radial-gradient with no image downloads and no measurable paint jank

#### Scenario: Body-level gradients removed
- **WHEN** the page loads
- **THEN** the `body` element no longer has the current radial-gradient background; the gradient is scoped to the hero section only

### Requirement: Section polarity flipping
The landing page SHALL alternate section background colors between `bg-canvas` (#0d0f0f) and `bg-canvas-soft` (#151817) in a strict odd/even pattern. The hero section SHALL use `bg-canvas`. Each subsequent section SHALL alternate.

#### Scenario: Sections alternate backgrounds
- **WHEN** the landing page renders with 9 sections (Hero, Stats, Value Props, Model Families, Agents, Features, Proof, CTA, FAQ)
- **THEN** odd sections (1st, 3rd, 5th, 7th, 9th) use `bg-canvas` and even sections (2nd, 4th, 6th, 8th) use `bg-canvas-soft`

#### Scenario: Section dividers removed where polarity suffices
- **WHEN** two adjacent sections have different background colors
- **THEN** the `border-b border-line` divider between them MAY be removed, as polarity provides sufficient visual separation

### Requirement: Three-tier section padding scale
The landing page SHALL use three distinct vertical padding tiers:
- Hero: `py-24 lg:py-48` (96px mobile → 192px desktop)
- Major sections (Stats, Model Families, Features, CTA): `py-20 lg:py-32` (80px → 128px)
- Minor sections (Value Props, Agents, Proof, FAQ): `py-16 lg:py-24` (64px → 96px)

#### Scenario: Hero uses maximum padding
- **WHEN** the hero section renders at desktop width (lg: and above)
- **THEN** vertical padding is 192px (`py-48`)

#### Scenario: Major sections use middle padding
- **WHEN** a major section (Stats, Model Families, Features, or CTA) renders at desktop width
- **THEN** vertical padding is 128px (`py-32`)

#### Scenario: Minor sections use base padding
- **WHEN** a minor section (Value Props, Agents, Proof, or FAQ) renders at desktop width
- **THEN** vertical padding is 96px (`py-24`)

#### Scenario: Mobile padding is proportional
- **WHEN** any section renders below the `lg:` breakpoint
- **THEN** vertical padding follows the three-tier ratio at smaller values (64px / 80px / 96px)

### Requirement: Display typography negative tracking
All display-level headings (text-3xl and above) SHALL use negative letter-spacing: `tracking-[-0.02em]` for hero h1, `tracking-[-0.015em]` for section h2 headings. All section titles SHALL end with a period (sentence case).

#### Scenario: Hero heading has tight tracking
- **WHEN** the hero h1 renders
- **THEN** letter-spacing is `-0.02em`

#### Scenario: Section headings have tight tracking
- **WHEN** a section h2 heading (text-3xl to text-5xl) renders
- **THEN** letter-spacing is `-0.015em`

#### Scenario: All section titles end with period
- **WHEN** any section heading text is rendered
- **THEN** the heading text ends with a period character
