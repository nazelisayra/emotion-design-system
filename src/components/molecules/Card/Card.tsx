import React from 'react'
import './Card.css'

export type CardVariant = 'action' | 'passive' | 'minimal'

export interface CardProps {
  variant?: CardVariant
  title?: string
  subtitle?: string
  children?: React.ReactNode
  actions?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ variant = 'passive', title, subtitle, children, actions }) => (
  <article className={`card card--${variant}`} aria-label={title}>
    {(title || subtitle) && (
      <header className="card__header">
        {title && <h3 className="card__title">{title}</h3>}
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
      </header>
    )}
    <div className="card__body">{children}</div>
    {actions && <footer className="card__footer">{actions}</footer>}
  </article>
)

export default Card
