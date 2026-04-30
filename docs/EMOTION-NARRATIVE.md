# Emotion states — Narrative & Usage

Purpose
- Describe how the design system maps high-level emotional goals (trust, focus, action) to concrete tokens and how engineers should consume them.

Mapping summary
- Trust: reliability, stability, and authority. Use for primary brand surfaces and confirmation states.
  - Background: `--color-primary-500` (mapped as `emotionTokens.trust.background`)
  - Foreground: `--color-on-primary`
  - Border: `--color-primary-600`

- Focus (Clarity): low-arousal, readable surfaces that reduce visual noise for concentration.
  - Background: `--color-bg-surface-glass` (soft translucent surfaces)
  - Foreground: `--color-text-primary`
  - Border: `--color-border-light`

- Action: attention-driving accents for CTAs and conversions.
  - Background: `--color-accent-yellow` (or `--color-accent` when appropriate)
  - Foreground: `--color-text-primary`
  - Accent/Glow: `--color-secondary-500` (used for subtle glow or focus)

Principles
- Components should not hardcode color values. Use the exported `emotionTokens` (JS) or the mapped CSS custom properties (`--emotion-*`) so visuals remain consistent and themeable.
- Provide sensible fallbacks: components use `--emotion-bg`, `--emotion-foreground`, `--emotion-border`, and `--emotion-glow` with token fallbacks.
- Keep accessibility in mind: ensure sufficient contrast for text and interactive elements. If a brand color fails contrast checks, provide an accessible variant.

How to use — components
- `Button` and `Card` now accept an `emotion` prop which applies the mapped tokens as inline CSS variables.

JSX examples

```tsx
import Button from '../src/components/atoms/Button/Button';
import Card from '../src/components/molecules/Card/Card';

// Trust example
<Button emotion="trust">Save</Button>

// Focus (clarity) example
<Card emotion="focus" title="Notes">Text content</Card>

// Action example
<Button variant="primary" emotion="action">Buy now</Button>
```

Direct CSS usage
- If you need to style non-JS surfaces or create a custom component, reference the same CSS tokens:

```css
.promo-cta {
  background: var(--color-accent-yellow);
  color: var(--color-text-primary);
}
/* or use the semantic emotion variables the components set */
.promo-cta { background: var(--emotion-bg, var(--color-accent-yellow)); }
```

Testing & storybook
- Add stories that render components with `emotion="trust" | "focus" | "action"` to verify visuals and accessibility.

Next steps (recommended)
- Add explicit contrast checks for each `emotion` mapping in your design QA checklist.
- Update `README.md` with a short "How to use emotions" section and link to these docs.
