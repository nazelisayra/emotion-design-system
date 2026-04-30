import React from 'react';
import './Card.css';
import { emotionTokens } from '../../tokens';

export interface CardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  headerActions?: React.ReactNode;
  emotion?: keyof typeof emotionTokens;
  centerContent?: boolean;
}

/**
 * Classification: Molecule — composed of smaller atoms (buttons, images).
 * Rationale: A Card groups a header, body, and actions into a reusable surface.
 */
const Card: React.FC<CardProps> = ({ title, subtitle, children, actions, emotion, headerActions, centerContent }) => {
  const emotionMap = emotion ? emotionTokens[emotion] : undefined;
  const style: React.CSSProperties | undefined = emotionMap
    ? {
        ['--emotion-bg' as any]: emotionMap.background,
        ['--emotion-foreground' as any]: (emotionMap as any).foreground || (emotionMap as any).color,
        ['--emotion-border' as any]: (emotionMap as any).border,
        ['--emotion-glow' as any]: (emotionMap as any).glow
      }
    : undefined;

  return (
    <article className={`card${centerContent ? ' card--centered' : ''}`} data-emotion={emotion} style={style} role="region" aria-label={title}>
      {(title || subtitle || headerActions) && (
        <header className="card__header">
          <div className="card__header-main">
            {title && <h3 className="card__title">{title}</h3>}
            {subtitle && <p className="card__subtitle">{subtitle}</p>}
          </div>
          {headerActions && <div className="card__header-actions">{headerActions}</div>}
        </header>
      )}

      <div className="card__body">{children}</div>

      {actions && <div className="card__actions">{actions}</div>}
    </article>
  );
};

export default Card;

// Emotional-state metadata for documentation and tooling
export const EMOTION_METADATA = {
  clarity: {
    description: 'A calm, readable surface — minimal chrome and high legibility.',
    tokens: {
      background: '--color-bg-surface-glass',
      border: '--color-border-light'
    }
  },
  trust: {
    description: 'Stable card with a clear call-to-action and reliable visual weight.',
    tokens: {
      background: '--color-bg-surface',
      border: '--color-border'
    }
  },
  action: {
    description: 'Attention-focused card, elevated and highlighted for conversion.',
    tokens: {
      background: '--color-bg-surface',
      glow: '--color-accent-yellow'
    }
  }
};
