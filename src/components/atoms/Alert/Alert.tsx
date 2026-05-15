import React, { useEffect, useState } from 'react'
import './Alert.css'

export type AlertVariant = 'success' | 'warning' | 'error' | 'info'

export interface AlertProps {
  variant?: AlertVariant
  title?: string
  children: React.ReactNode
  onClose?: () => void
  autoDismiss?: number | null
  persistent?: boolean
}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  onClose,
  autoDismiss = 4000,
  persistent = false,
}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (persistent || !autoDismiss || !visible) return
    const id = setTimeout(() => {
      setVisible(false)
      onClose?.()
    }, autoDismiss)
    return () => clearTimeout(id)
  }, [persistent, autoDismiss, visible, onClose])

  if (!visible) return null

  return (
    <div className={`alert alert--${variant}`} role="alert" aria-live="polite">
      <div className="alert__content">
        {title && <p className="alert__title">{title}</p>}
        <p className="alert__message">{children}</p>
      </div>
      {!persistent && (
        <button
          className="alert__close"
          onClick={() => {
            setVisible(false)
            onClose?.()
          }}
          aria-label="Dismiss"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default Alert
