import React from 'react';
import './Button.css';
import { emotionTokens } from '../../tokens';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'success'
  | 'danger'
  | 'link'
  | 'disabled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  emotion?: keyof typeof emotionTokens;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  emotion,
  ...rest
}) => {
  const isDisabledVariant = variant === 'disabled';
  const disabled = isDisabledVariant || rest.disabled;
  const className = `button button--${variant} button--${size}`;

  // map emotion tokens to inline CSS variables so CSS can override visually
  const emotionMap = emotion ? emotionTokens[emotion] : undefined;
  const style: React.CSSProperties = emotionMap
    ? {
        ['--emotion-bg' as any]: emotionMap.background,
        ['--emotion-foreground' as any]: (emotionMap as any).foreground || (emotionMap as any).color,
        ['--emotion-border' as any]: (emotionMap as any).border,
        ['--emotion-glow' as any]: (emotionMap as any).glow
      }
    : undefined;

  return (
    <button data-emotion={emotion} className={className} style={style} disabled={disabled} {...rest}>
      {icon ? <span className="button__icon">{icon}</span> : null}
      <span className="button__label">{children}</span>
    </button>
  );
};

export default Button;

// Emotional-state metadata for tooling and documentation
export const EMOTION_METADATA = {
  clarity: {
    description: 'Minimal, low-arousal state — reduces visual noise for focus and reading.',
    tokens: {
      background: '--color-bg-surface',
      color: '--color-text-primary'
    }
  },
  trust: {
    description: 'Stable, dependable state — communicates reliability and authority.',
    tokens: {
      background: '--color-primary',
      color: '--color-on-primary'
    }
  },
  action: {
    description: 'High-arousal, attention-driving state for important interactions.',
    tokens: {
      background: '--color-accent-yellow',
      color: '--color-text-primary'
    }
  }
};
