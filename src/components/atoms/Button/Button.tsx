import React from 'react';
import './Button.css';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'success'
  | 'danger'
  | 'link'
  | 'default'
  | 'hover'
  | 'disabled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  icon,
  children,
  ...rest
}) => {
  const isDisabledVariant = variant === 'disabled';
  const disabled = isDisabledVariant || rest.disabled;

  return (
    <button
      className={`button button--${variant} button--${size}`}
      disabled={disabled}
      {...rest}
    >
      {icon ? <span className="button__icon">{icon}</span> : null}
      <span className="button__label">{children}</span>
    </button>
  );
};

export default Button;

export const EMOTION_METADATA = {
  clarity: {
    description: 'Minimal, low-arousal state — reduces visual noise for focus and reading.',
    tokens: { background: '--color-bg-surface', color: '--color-text-primary' }
  },
  trust: {
    description: 'Stable, dependable state — communicates reliability and authority.',
    tokens: { background: '--color-primary', color: '--color-on-primary' }
  },
  action: {
    description: 'High-arousal, attention-driving state for important interactions.',
    tokens: { background: '--color-accent-yellow', color: '--color-text-primary' }
  }
};
