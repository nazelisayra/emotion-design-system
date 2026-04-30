import React, { useEffect, useState } from 'react'
import './Alert.css'

type Variant = 'success' | 'error' | 'info'

interface AlertProps {
  variant?: Variant
  title?: string
  children: React.ReactNode
  onClose?: () => void
  autoDismiss?: number | null
}

const Alert: React.FC<AlertProps> = ({ variant = 'info', title, children, onClose, autoDismiss = 4000 }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!autoDismiss || !visible) return
    const id = setTimeout(() => {
      setVisible(false)
      onClose?.()
    }, autoDismiss)
    return () => clearTimeout(id)
  }, [autoDismiss, visible, onClose])

  if (!visible) return null

  return (
    <div className={`alert alert--${variant}`} role="alert" aria-live="polite">
      <div className="alert__content">
        {title && <div className="alert__title">{title}</div>}
        <div className="alert__message">{children}</div>
      </div>
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
    </div>
  )
}

export default Alert
