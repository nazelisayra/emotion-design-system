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
  | 'disabled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  ...rest
}) => {
  const isDisabledVariant = variant === 'disabled';
  const disabled = isDisabledVariant || rest.disabled;
  const className = `button button--${variant} button--${size}`;

  return (
    <button className={className} disabled={disabled} {...rest}>
      {icon ? <span className="button__icon">{icon}</span> : null}
      <span className="button__label">{children}</span>
    </button>
  );
};

export default Button;
