import React from 'react';
import './SectionHeader.css';

export interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, actions, className }) => {
  return (
    <header className={`section-header ${className ?? ''}`}>
      <div className="section-header__main">
        {title && <h2 className="section-header__title">{title}</h2>}
        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </div>
      {actions && <div className="section-header__actions">{actions}</div>}
    </header>
  );
};

export default SectionHeader;
