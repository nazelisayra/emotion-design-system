import React, { useState } from 'react'
import Alert from './Alert'

export default {
  title: 'Atoms/Alert',
  component: Alert,
}

type Variant = 'success' | 'error' | 'info'

export const ActionResponse = () => {
  const [alert, setAlert] = useState<{ variant: Variant; title?: string; message?: string } | null>(null)

  const trigger = (variant: Variant) => {
    setAlert({ variant, title: variant === 'success' ? 'Success' : variant === 'error' ? 'Error' : 'Info', message: `This is a ${variant} message.` })
  }

  const simulateSave = () => {
    setAlert({ variant: 'info', title: 'Saving…', message: 'Performing action' })
    setTimeout(() => {
      setAlert({ variant: 'success', title: 'Saved', message: 'Your changes were saved.' })
    }, 1200)
  }

  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => trigger('success')}>Trigger Success</button>
        <button onClick={() => trigger('error')}>Trigger Error</button>
        <button onClick={() => trigger('info')}>Trigger Info</button>
        <button onClick={simulateSave}>Simulate Save</button>
      </div>

      {alert && (
        <Alert variant={alert.variant} title={alert.title} onClose={() => setAlert(null)}>
          {alert.message}
        </Alert>
      )}
    </div>
  )
}

export const AutoDismiss = () => (
  <div style={{ maxWidth: 560 }}>
    <Alert variant="success" title="Auto Dismiss" autoDismiss={2500}>
      This alert will dismiss after 2.5s
    </Alert>
  </div>
)
