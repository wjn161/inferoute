## Why

Inferoute's dark theme reads as "generic dev tool" — undifferentiated from hundreds of dark-themed developer products. Mistral's "AI lab notebook × print magazine" aesthetic with warm cream backgrounds, massive editorial typography, and restrained orange accent usage creates immediate visual distinctiveness. The warm palette signals approachability while the editorial typography signals intelligence — exactly the positioning for an AI gateway targeting Western developers. Notably, Mistral's accent orange (#ea2804) is identical to inferoute's existing flame color, making this adaptation natural.

## What Changes

- **Light theme conversion**: Replace dark canvas (#0d0f0f) with warm cream (#f9f7f3), dark text (#202020) instead of light text (#f5f7f5)
- **Editorial typography**: Massive hero headlines (up to 128px equivalent), tight negative tracking, heavier weights for display text
- **Restrained accent usage**: Rule of one flame-orange element per viewport — treating orange like a stamp, not a fill
- **Pill-shaped buttons**: 9999px radius for all interactive elements, 44px height
- **Card system**: White (#ffffff) cards on cream (#f9f7f3) with 10-16px radius, minimal borders
- **Section rhythm**: Cream → full-bleed orange → dark code bands, 96-160px vertical padding
- **Code blocks**: Dark (#202020) backgrounds with black (#000000) tab chips, treated as editorial pull-quotes

## Capabilities

### New Capabilities
- `mistral-light-theme`: Complete light theme conversion with warm cream palette, editorial typography, and restrained orange accent system

### Modified Capabilities
(none)

## Impact

- **Files changed**: `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, all `components/landing/*.tsx`, `components/header.tsx`, `components/footer.tsx`
- **Dependencies**: None
- **Breaking changes**: Visual-only — dark theme is fully replaced
- **Risk**: Medium — complete color inversion requires careful contrast testing
