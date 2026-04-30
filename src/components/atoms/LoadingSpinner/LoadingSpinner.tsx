import React from 'react'
import './LoadingSpinner.css'

type SpinnerSize = 'sm' | 'md' | 'lg'

export interface LoadingSpinnerProps {
  size?: SpinnerSize
  label?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', label = 'Loading…' }) => (
  <span className={`spinner spinner--${size}`} role="status" aria-label={label}>
    <span className="spinner__ring" />
  </span>
)

export default LoadingSpinner
