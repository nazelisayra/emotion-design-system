import React from 'react';
import './Card.css';

export interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

/**
 * Classification: Molecule — composed of smaller atoms (buttons, images).
 * Rationale: A Card groups a header, body, and actions into a reusable surface.
 */
const Card: React.FC<CardProps> = ({ title, subtitle, children, actions }) => {
  return (
    <article className="card" role="region" aria-label={title}>
      {(title || subtitle) && (
        <header className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </header>
      )}

      <div className="card__body">{children}</div>

      {actions && <div className="card__actions">{actions}</div>}
    </article>
  );
};

export default Card;
