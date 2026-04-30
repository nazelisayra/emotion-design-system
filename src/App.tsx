import { useState, useEffect, type CSSProperties } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import { DownloadButton, SuccessButton, Alert, InputField, LoadingSpinner, ProgressBar } from './components/atoms'
import Card from './components/molecules/Card'

type AlertState = { variant: 'success' | 'error' | 'info'; message: string } | null

function App() {
  const [alert, setAlert] = useState<AlertState>(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [formAlert, setFormAlert] = useState<AlertState>(null)

  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loadAlert, setLoadAlert] = useState<AlertState>(null)

  useEffect(() => {
    if (!loading) return
    const id = setInterval(() => setProgress(p => Math.min(p + 2, 100)), 60)
    return () => clearInterval(id)
  }, [loading])

  useEffect(() => {
    if (loading && progress >= 100) {
      setLoading(false)
      setLoadAlert({ variant: 'success', message: 'Loaded successfully!' })
    }
  }, [loading, progress])

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address.')
      return
    }
    setEmailError('')
    setFormAlert({ variant: 'success', message: `Thanks${name ? `, ${name}` : ''}! We'll be in touch at ${email}.` })
    setName('')
    setEmail('')
  }

  return (
    <div id="center">
      <h1>Emotion Design System — Trust · Focus · Action</h1>

      <div className="content-width" style={{ '--card-max-height': 'none' } as CSSProperties}>
        <Card
          title="Hero — Trust Example"
          subtitle="Demonstrates a trust-focused surface and action"
          actions={<SuccessButton>Confirm</SuccessButton>}
          centerContent
        >
          <img src={heroImg} alt="Hero" style={{ width: '33%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: 8, objectFit: 'contain' }} />
        </Card>
      </div>

      <div style={{ marginTop: '16px' }}>
        <DownloadButton href={heroImg} filename="hero.png" label="Download Asset" />
      </div>

      <section style={{ marginTop: '32px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Alert — Action → Response Loop</h2>
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <SuccessButton onClick={() => setAlert({ variant: 'success', message: 'Action completed successfully.' })}>
            Trigger Success
          </SuccessButton>
          <button onClick={() => setAlert({ variant: 'error', message: 'Something went wrong. Please try again.' })}>
            Trigger Error
          </button>
          <button onClick={() => setAlert({ variant: 'info', message: 'Here is some useful information.' })}>
            Trigger Info
          </button>
        </div>
        {alert && (
          <div style={{ marginTop: '12px', width: '100%', maxWidth: '400px' }}>
            <Alert variant={alert.variant} onClose={() => setAlert(null)}>
              {alert.message}
            </Alert>
          </div>
        )}
      </section>

      <section style={{ marginTop: '32px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Input Field — Enter Data</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px', marginTop: '12px' }}
        >
          <InputField
            label="Name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            hint="Optional — just so we know what to call you."
          />
          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => { setEmail(e.target.value); setEmailError('') }}
            error={emailError}
            success={!emailError && email.includes('@') ? 'Looks good!' : undefined}
          />
          <SuccessButton type="submit">Send</SuccessButton>
        </form>
        {formAlert && (
          <div style={{ marginTop: '12px', width: '100%', maxWidth: '400px' }}>
            <Alert variant={formAlert.variant} onClose={() => setFormAlert(null)}>
              {formAlert.message}
            </Alert>
          </div>
        )}
      </section>

      <section style={{ marginTop: '32px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Loading — Spinner &amp; Progress</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '12px' }}>
          <LoadingSpinner size="sm" />
          <LoadingSpinner size="md" />
          <LoadingSpinner size="lg" />
        </div>
        <div style={{ width: '100%', maxWidth: '400px', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {loading && <LoadingSpinner size="sm" />}
            <div style={{ flex: 1 }}>
              <ProgressBar value={progress} label="Simulated load" showValue variant={progress >= 100 ? 'success' : 'default'} />
            </div>
          </div>
          <SuccessButton onClick={() => { setProgress(0); setLoadAlert(null); setLoading(true) }} disabled={loading}>
            {loading ? 'Loading…' : 'Simulate Load'}
          </SuccessButton>
        </div>
        {loadAlert && (
          <div style={{ marginTop: '12px', width: '100%', maxWidth: '400px' }}>
            <Alert variant={loadAlert.variant} onClose={() => setLoadAlert(null)}>
              {loadAlert.message}
            </Alert>
          </div>
        )}
      </section>

      <section style={{ marginTop: '32px', width: '100%' }}>
        <h2>Card Variations — Emotion Examples</h2>
        <div className="content-width" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '12px' }}>
          {/* 1) No image */}
          <Card
            title="Focus — Text Surface"
            subtitle="Readable, low-arousal layout"
            actions={
              <>
                <SuccessButton>Confirm</SuccessButton>
              </>
            }
          >
            <p>A focus-oriented card showing readable text with reduced chrome.</p>
          </Card>

          {/* 2) No button (no actions) */}
          <Card emotion="trust" title="Trust — Visual Surface" subtitle="Image-first card (no actions)">
            <img src={heroImg} alt="Hero" className="base" />
          </Card>

          {/* 3) Just text */}
          <Card title="Neutral — Minimal Surface">
            <p>
              A minimal card for brief inline content — suited to calm, low-arousal contexts.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default App
