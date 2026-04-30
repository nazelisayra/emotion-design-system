import React from 'react'
import './ProgressBar.css'

type ProgressVariant = 'default' | 'success' | 'error'
type ProgressSize = 'sm' | 'md' | 'lg'

export interface ProgressBarProps {
  value: number
  label?: string
  showValue?: boolean
  variant?: ProgressVariant
  size?: ProgressSize
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  showValue = false,
  variant = 'default',
  size = 'md',
}) => {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={`progress-bar progress-bar--${size} progress-bar--${variant}`}>
      {(label || showValue) && (
        <div className="progress-bar__header">
          {label && <span className="progress-bar__label">{label}</span>}
          {showValue && <span className="progress-bar__value">{clamped}%</span>}
        </div>
      )}
      <div
        className="progress-bar__track"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div className="progress-bar__fill" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
