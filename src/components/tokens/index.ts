// JS/TS token exports referencing CSS custom properties
// Use these when you need tokens in JS/TS (styles-in-js, inline styles, storybook args)

export const colors = {
  primary: 'var(--color-primary)',
  primary500: 'var(--color-primary-500)',
  primary600: 'var(--color-primary-600)',

  secondary: 'var(--color-secondary)',
  accent: 'var(--color-accent)',

  background: 'var(--color-background)',
  surface: 'var(--color-surface)',
  border: 'var(--color-border)',

  textPrimary: 'var(--color-text-primary)',
  textSecondary: 'var(--color-text-secondary)',
  textInverse: 'var(--color-text-inverse)',

  success: 'var(--color-success-500)',
  warning: 'var(--color-warning-500)',
  danger: 'var(--color-danger-500)'
} as const;

export type ColorToken = typeof colors[keyof typeof colors];

export default colors;

export { emotionTokens } from './emotionTokens';
