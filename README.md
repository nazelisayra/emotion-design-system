# Emotion Design System

A React + TypeScript component library built around emotional intent — every surface, token, and interaction is designed to evoke **Trust**, **Focus**, or **Action**.

---

## Overview

Emotion Design System is a UI component library that goes beyond visual consistency. Each component carries an emotional context expressed through a curated token system. Colors, spacing, shadows, and motion are tuned to produce specific psychological responses, making it possible to communicate reliability, calm, or urgency purely through design.

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 5.9 |
| Vite | 8 |
| Bootstrap | 5.3 (base reset) |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check and build for production
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

---

## Design Tokens

Tokens are defined as CSS custom properties in `src/components/tokens/colors.css` and exposed as TypeScript values via `src/components/tokens/`.

### Emotion States

The core of the system. Every component that accepts an `emotion` prop maps to one of three states:

| State | Intent | Visual cue |
|---|---|---|
| `trust` | Reliability, authority | Stable blue surfaces, clear borders |
| `focus` | Calm, low-arousal reading | Minimal chrome, muted palette |
| `action` | Urgency, conversion | Yellow accent, glow, elevated shadow |

Emotion overrides are applied via CSS custom properties injected as inline styles:

```tsx
<Button emotion="action">Get Started</Button>
<Card emotion="trust" title="Verified" />
```

### Color Palette

```
--color-primary          Blue scale (500 → 900)
--color-secondary        Purple scale
--color-accent           Teal scale
--color-accent-yellow    Attention / action
--color-success          #2d9a3a
--color-warning          Amber
--color-danger           #e63946
--color-text-primary     Main body text
--color-text-muted       Secondary / hint text
--color-bg-surface       Card and panel background
--color-border           Default border
```

### Typography

```
--font-family-base    'Poppins', 'Inter', system-ui, sans-serif
--font-size-xs        12px
--font-size-sm        14px
--font-size-md        16px
--font-size-lg        18px
--font-size-xl        24px
--font-size-2xl       32px
--font-size-3xl       56px
--font-weight-light      300
--font-weight-regular    400
--font-weight-medium     500
--font-weight-semibold   600
```

### Spacing

```
--space-2xs   4px
--space-xs    8px
--space-sm    12px
--space-md    16px
--space-lg    24px
--space-xl    32px
--space-2xl   48px
```

### Radii & Shadows

```
--radius-sm       8px
--radius-md       16px
--radius-lg       24px
--radius-xl       32px
--radius-pill     9999px
--radius-circle   50%

--shadow-sm       Subtle card lift
--shadow-md       Elevated panels
--shadow-glass    Frosted glass surfaces
```

---

## Components

### Atoms

Atoms are the smallest standalone units. All atoms are exported from `src/components/atoms/index.ts`.

#### Button

Full-featured button with variant, size, icon, and emotion support.

```tsx
import { Button } from './components/atoms'

<Button variant="primary" size="md">Save</Button>
<Button variant="outline" size="sm" emotion="focus">Cancel</Button>
<Button variant="danger" disabled>Delete</Button>
```

| Variant | Description |
|---|---|
| `primary` | Main call-to-action |
| `secondary` | Supporting action |
| `outline` | Bordered, no fill |
| `ghost` | No border or fill |
| `success` | Confirmation action |
| `danger` | Destructive action |
| `link` | Inline text link |
| `disabled` | Visually inactive |

**Sizes:** `sm` · `md` · `lg`

**Convenience exports:** `SuccessButton`, `DangerButton`, `LinkButton`, `DownloadButton`

---

#### Alert

Dismissible feedback banner for success, error, and info states. Auto-dismisses after 4 seconds by default.

```tsx
import { Alert } from './components/atoms'

<Alert variant="success" title="Saved!" onClose={() => {}}>
  Your changes have been saved.
</Alert>

<Alert variant="error" autoDismiss={null}>
  Something went wrong. Please try again.
</Alert>
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `'success' \| 'error' \| 'info'` | `'info'` |
| `title` | `string` | — |
| `onClose` | `() => void` | — |
| `autoDismiss` | `number \| null` | `4000` |

---

#### InputField

Accessible text input with label, hint, validation states, and all standard HTML input types.

```tsx
import { InputField } from './components/atoms'

<InputField
  label="Email"
  type="email"
  placeholder="you@example.com"
  hint="We'll never share your email."
/>

<InputField label="Username" error="This name is already taken." />
<InputField label="Email" success="Looks good!" />
```

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | — |
| `hint` | `string` | — |
| `error` | `string` | — |
| `success` | `string` | — |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |

All standard `<input>` attributes are forwarded.

---

#### LoadingSpinner

Accessible spinning indicator for async states.

```tsx
import { LoadingSpinner } from './components/atoms'

<LoadingSpinner size="sm" />
<LoadingSpinner size="md" label="Saving your work…" />
<LoadingSpinner size="lg" />
```

| Prop | Type | Default |
|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `label` | `string` | `'Loading…'` |

Uses `role="status"` and `aria-label` for screen reader compatibility.

---

#### ProgressBar

Accessible progress indicator with label, live value, size, and semantic variant.

```tsx
import { ProgressBar } from './components/atoms'

<ProgressBar value={72} label="Uploading" showValue />
<ProgressBar value={100} variant="success" label="Complete" showValue />
<ProgressBar value={45} variant="error" label="Failed" />
```

| Prop | Type | Default |
|---|---|---|
| `value` | `number` (0–100) | required |
| `label` | `string` | — |
| `showValue` | `boolean` | `false` |
| `variant` | `'default' \| 'success' \| 'error'` | `'default'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |

Uses `role="progressbar"` with `aria-valuenow / min / max`.

---

### Molecules

Molecules compose atoms into more complex, self-contained patterns.

#### Card

Flexible surface component for grouping a header, body, and actions. Supports emotion theming and centered layout.

```tsx
import Card from './components/molecules/Card'

<Card
  title="Trust — Verified Listing"
  subtitle="Last reviewed 2 days ago"
  emotion="trust"
  actions={<SuccessButton>Confirm</SuccessButton>}
  centerContent
>
  <img src={listingImg} alt="Listing" />
</Card>
```

| Prop | Type | Description |
|---|---|---|
| `title` | `string` | Card heading |
| `subtitle` | `string` | Supporting text beneath title |
| `actions` | `ReactNode` | Bottom action area |
| `headerActions` | `ReactNode` | Top-right action area |
| `emotion` | `'trust' \| 'focus' \| 'action'` | Emotion theme override |
| `centerContent` | `boolean` | Centers header text and actions |

Override the default max-height by setting `--card-max-height` on a parent element.

---

## Project Structure

```
src/
├── assets/                  Static assets (images, icons)
├── components/
│   ├── atoms/               Smallest reusable UI units
│   │   ├── Alert/
│   │   ├── Button/
│   │   ├── DangerButton/
│   │   ├── DownloadButton/
│   │   ├── InputField/
│   │   ├── LinkButton/
│   │   ├── LoadingSpinner/
│   │   ├── ProgressBar/
│   │   ├── SuccessButton/
│   │   └── index.ts         Barrel export
│   ├── molecules/           Composed patterns
│   │   ├── Card/
│   │   └── SectionHeader/
│   └── tokens/              Design token definitions
│       ├── colors.css       CSS custom properties
│       ├── emotionTokens.ts Emotion → token map
│       └── index.ts         TS token exports
├── App.tsx                  Component showcase
├── App.css                  Global layout styles
└── main.tsx                 Entry point
```

---

## Naming Conventions

Components follow a strict BEM-like CSS naming pattern:

```
.component                   Block
.component__element          Element
.component--modifier         Modifier (variant, size, state)
```

Emotion overrides are applied through CSS custom properties injected as inline styles, keeping the cascade clean:

```css
background: var(--emotion-bg, var(--color-primary));
color: var(--emotion-foreground, var(--color-on-primary));
```

---

## Accessibility

- All interactive components include appropriate ARIA roles and attributes (`role="alert"`, `role="status"`, `role="progressbar"`, `aria-label`, `aria-invalid`, `aria-describedby`)
- Form inputs use `useId` for stable, unique label associations
- Buttons respect the native `disabled` attribute and render `cursor: not-allowed` visually
- Alerts use `aria-live="polite"` for non-interruptive announcements

---

## License

Private — all rights reserved.
