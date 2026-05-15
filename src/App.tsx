import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import { Button, Input, DownloadButton, SuccessButton, Alert, InputField, LoadingSpinner, ProgressBar, Loader } from './components/atoms'
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

  const loaderState: 'idle' | 'loading' | 'complete' = loading ? 'loading' : progress >= 100 ? 'complete' : 'idle'

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

      <section className="button-showcase">
        <h2 className="button-showcase__heading">Button</h2>
        <p className="button-showcase__desc">Trust · Focus · Action</p>
        <div className="button-showcase__grid">
          <div className="button-showcase__item">
            <Button variant="default" size="lg">Engage</Button>
            <span className="button-showcase__label">Default</span>
          </div>
          <div className="button-showcase__item">
            <Button variant="hover" size="lg">Engage</Button>
            <span className="button-showcase__label">Hover</span>
          </div>
          <div className="button-showcase__item">
            <Button variant="disabled" size="lg">Engage</Button>
            <span className="button-showcase__label">Disabled</span>
          </div>
        </div>
      </section>

      <section className="input-showcase">
        <h2 className="input-showcase__heading">Input</h2>
        <p className="input-showcase__desc">Default · Focus · Error</p>
        <div className="input-showcase__grid">
          <div className="input-showcase__item">
            <Input label="Label" state="default" placeholder="Placeholder" />
            <span className="input-showcase__caption">Default</span>
          </div>
          <div className="input-showcase__item">
            <Input label="Label" state="focus" placeholder="Typing…" />
            <span className="input-showcase__caption">Focus</span>
          </div>
          <div className="input-showcase__item">
            <Input
              label="Label"
              state="error"
              placeholder="Invalid"
              errorMessage="This field is required."
            />
            <span className="input-showcase__caption">Error</span>
          </div>
        </div>
      </section>

      <section className="loader-showcase">
        <h2 className="loader-showcase__heading">Loader</h2>
        <p className="loader-showcase__desc">Idle · Loading · Complete</p>
        <div className="loader-showcase__grid">
          <Loader state="idle" label="Idle" />
          <Loader state="loading" label="Loading" />
          <Loader state="complete" label="Complete" />
        </div>
      </section>

      <section className="alert-showcase">
        <h2 className="alert-showcase__heading">Alert</h2>
        <p className="alert-showcase__desc">Success · Warning · Error</p>
        <div className="alert-showcase__stack">
          <Alert variant="success" persistent title="Action complete">
            Your changes have been saved successfully.
          </Alert>
          <Alert variant="warning" persistent title="Proceed with caution">
            This action may affect other connected components.
          </Alert>
          <Alert variant="error" persistent title="Something went wrong">
            Unable to process your request. Please try again.
          </Alert>
        </div>
      </section>

      <section className="card-showcase">
        <h2 className="card-showcase__heading">Card</h2>
        <p className="card-showcase__desc">Action · Passive · Minimal</p>
        <div className="card-showcase__grid">
          <Card
            variant="action"
            title="Action"
            subtitle="Conversion-focused surface"
            actions={<SuccessButton>Get Started</SuccessButton>}
          >
            <p>High-priority surface built for decisions. Strong hierarchy, clear CTA, elevated presence.</p>
          </Card>

          <Card
            variant="passive"
            title="Passive"
            subtitle="Observational surface"
          >
            <p>A steady, watchful surface. Suited for data and informational content with no required action.</p>
          </Card>

          <Card
            variant="minimal"
            title="Minimal"
            subtitle="Low cognitive load"
          >
            <p>A quiet surface. Reduced chrome for calm contexts where visual noise needs to disappear.</p>
          </Card>
        </div>
      </section>

      <div className="content-width">
        <Card
          variant="action"
          title="Hero — Action"
          subtitle="Demonstrates a conversion-focused surface"
          actions={
            <>
              <DownloadButton href={heroImg} filename="hero.png" label="Download" />
              <SuccessButton>Confirm</SuccessButton>
            </>
          }
        >
          <img src={heroImg} alt="Hero" />
        </Card>
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
          <Loader state={loaderState} size="sm" showTrack={false} />
          <Loader state={loaderState} size="md" showTrack={false} />
          <Loader state={loaderState} size="lg" showTrack={false} />
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

    </div>
  )
}

export default App
