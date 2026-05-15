import React from 'react'
import './Loader.css'

export type LoaderState = 'idle' | 'loading' | 'complete'

export interface LoaderProps {
  state?: LoaderState
  label?: string
  size?: 'sm' | 'md' | 'lg'
  showTrack?: boolean
}

const Loader: React.FC<LoaderProps> = ({ state = 'idle', label, size, showTrack = true }) => (
  <div
    className={`loader loader--${state}${size ? ` loader--${size}` : ''}`}
    role="status"
    aria-label={label ?? state}
  >
    <div className="loader__spinner">
      <span className="loader__ring" aria-hidden="true" />
      {state === 'complete' && <span className="loader__check" aria-hidden="true" />}
    </div>
    {showTrack && (
      <div
        className="loader__track"
        role="progressbar"
        aria-valuenow={state === 'complete' ? 100 : state === 'loading' ? 60 : 0}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="loader__fill" />
      </div>
    )}
    {label && <p className="loader__label">{label}</p>}
  </div>
)

export default Loader
