// Mapping of emotional states to design tokens
// These map high-level emotional goals to concrete CSS custom properties

export const emotionTokens = {
  trust: {
    // Visuals that convey reliability and stability
    background: 'var(--color-primary-500)',
    foreground: 'var(--color-on-primary)',
    border: 'var(--color-primary-600)'
  },

  focus: {
    // Low-arousal, high-clarity surfaces for reading and concentration
    background: 'var(--color-bg-surface-glass)',
    foreground: 'var(--color-text-primary)',
    border: 'var(--color-border-light)'
  },

  action: {
    // Attention-driving accents for CTAs and conversions
    background: 'var(--color-accent-yellow)',
    foreground: 'var(--color-text-primary)',
    accent: 'var(--color-accent)',
    // optional glow color (useful for focus/hover states)
    glow: 'var(--color-secondary-500)'
  }
} as const;

export type EmotionToken = typeof emotionTokens[keyof typeof emotionTokens];

export default emotionTokens;
