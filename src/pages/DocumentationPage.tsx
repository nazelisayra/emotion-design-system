import './DocumentationPage.css'
import { Button, Input, Alert, Loader, SuccessButton } from '../components/atoms'
import Card from '../components/molecules/Card'
import SectionHeader from '../components/molecules/SectionHeader/SectionHeader'

/* ── Static data ─────────────────────────────────────────── */

const principles = [
  {
    symbol: '◈',
    name: 'Trust',
    desc: 'Reliable, stable interactions that give users confidence in the system.',
  },
  {
    symbol: '◎',
    name: 'Focus',
    desc: 'Low-arousal surfaces that reduce cognitive load and support deep work.',
  },
  {
    symbol: '◆',
    name: 'Action',
    desc: 'Attention-driving patterns that guide users toward key decisions.',
  },
  {
    symbol: '◉',
    name: 'Feedback',
    desc: 'Immediate, clear responses that close the interaction loop for users.',
  },
  {
    symbol: '○',
    name: 'Clarity',
    desc: 'Minimal noise with strong typographic hierarchy for legible interfaces.',
  },
]

const componentDocs = [
  {
    name: 'Button',
    tag: 'atom',
    desc: 'Primary call-to-action surface. Three emotional states communicate the system\'s response to user intent — from invitation to confirmation to restraint.',
  },
  {
    name: 'Input',
    tag: 'atom',
    desc: 'Single-line text entry field with visual state feedback. Shifts color signature on focus to signal active engagement, and red accent on error for immediate correction.',
  },
  {
    name: 'Alert',
    tag: 'atom',
    desc: 'Contextual feedback banner. Colour-coded by semantic intent — green for confirmation, amber for caution, red for failure. Supports persistent and dismissible modes.',
  },
  {
    name: 'Loader',
    tag: 'atom',
    desc: 'Circular progress indicator with a three-phase lifecycle. Idle is dormant; loading animates the ring; complete collapses to a full green ring with a checkmark.',
  },
  {
    name: 'Card',
    tag: 'molecule',
    desc: 'Flexible content container with three emotional registers. Action leads with a blue glow for decisions; Passive observes quietly; Minimal disappears into the background.',
  },
]

const colorChips = [
  { mod: 'primary',   label: 'Primary'   },
  { mod: 'secondary', label: 'Secondary' },
  { mod: 'accent',    label: 'Accent'    },
  { mod: 'success',   label: 'Success'   },
  { mod: 'warning',   label: 'Warning'   },
  { mod: 'danger',    label: 'Danger'    },
  { mod: 'showcase',  label: 'Showcase'  },
  { mod: 'surface',   label: 'Surface'   },
  { mod: 'muted',     label: 'Muted'     },
  { mod: 'inverse',   label: 'Inverse'   },
]

const spacingRows = [
  { mod: '2xs', token: '--space-2xs', value: '4px'  },
  { mod: 'xs',  token: '--space-xs',  value: '8px'  },
  { mod: 'sm',  token: '--space-sm',  value: '12px' },
  { mod: 'md',  token: '--space-md',  value: '16px' },
  { mod: 'lg',  token: '--space-lg',  value: '24px' },
  { mod: 'xl',  token: '--space-xl',  value: '32px' },
  { mod: '2xl', token: '--space-2xl', value: '48px' },
]

const typeRows = [
  { mod: 'xs',  token: '--font-size-xs',  value: '12px', sample: 'Tags, dates, small labels'        },
  { mod: 'sm',  token: '--font-size-sm',  value: '14px', sample: 'Secondary text, list items'       },
  { mod: 'md',  token: '--font-size-md',  value: '16px', sample: 'Base body, button text'           },
  { mod: 'lg',  token: '--font-size-lg',  value: '20px', sample: 'Card titles'                      },
  { mod: 'xl',  token: '--font-size-xl',  value: '24px', sample: 'Section headings'                 },
  { mod: '2xl', token: '--font-size-2xl', value: '40px', sample: 'Display'                          },
]

/* ── Component ───────────────────────────────────────────── */

function DocumentationPage() {
  return (
    <main className="documentation-page">

      {/* ── Hero ── */}
      <header className="documentation-page__hero">
        <p className="documentation-page__hero-badge">v1.0 · Design System</p>
        <h1 className="documentation-page__hero-title">Emotion Design System</h1>
        <p className="documentation-page__hero-lead">
          A minimal, futuristic design language built around emotional interaction patterns.
          Every component encodes a deliberate feeling — trust, focus, or action — so
          interfaces communicate intent before a word is read.
        </p>
        <div className="documentation-page__hero-tags">
          {principles.map(({ name }) => (
            <span key={name} className="documentation-page__hero-tag">{name}</span>
          ))}
        </div>
      </header>

      {/* ── Design Principles ── */}
      <section className="documentation-page__section">
        <SectionHeader
          title="Design Principles"
          subtitle="The emotional vocabulary this system is built on"
        />
        <div className="documentation-page__grid">
          {principles.map(({ symbol, name, desc }) => (
            <article key={name} className="doc-principle">
              <span className="doc-principle__symbol" aria-hidden="true">{symbol}</span>
              <h3 className="doc-principle__name">{name}</h3>
              <p className="doc-principle__desc">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Components ── */}
      <section className="documentation-page__section">
        <SectionHeader
          title="Components"
          subtitle="Atoms and molecules — states and variants"
        />

        {/* Button */}
        <div className="doc-component">
          <header className="doc-component__header">
            <h3 className="doc-component__name">{componentDocs[0].name}</h3>
            <span className="doc-component__tag">{componentDocs[0].tag}</span>
          </header>
          <p className="doc-component__desc">{componentDocs[0].desc}</p>
          <div className="doc-component__showcase">
            <div className="doc-component__state">
              <Button variant="default" size="lg">Engage</Button>
              <span className="doc-component__state-label">Default</span>
            </div>
            <div className="doc-component__state">
              <Button variant="hover" size="lg">Engage</Button>
              <span className="doc-component__state-label">Hover</span>
            </div>
            <div className="doc-component__state">
              <Button variant="disabled" size="lg">Engage</Button>
              <span className="doc-component__state-label">Disabled</span>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="doc-component">
          <header className="doc-component__header">
            <h3 className="doc-component__name">{componentDocs[1].name}</h3>
            <span className="doc-component__tag">{componentDocs[1].tag}</span>
          </header>
          <p className="doc-component__desc">{componentDocs[1].desc}</p>
          <div className="doc-component__showcase">
            <div className="doc-component__state">
              <Input label="Label" state="default" placeholder="Placeholder" />
              <span className="doc-component__state-label">Default</span>
            </div>
            <div className="doc-component__state">
              <Input label="Label" state="focus" placeholder="Typing…" />
              <span className="doc-component__state-label">Focus</span>
            </div>
            <div className="doc-component__state">
              <Input label="Label" state="error" placeholder="Invalid" errorMessage="This field is required." />
              <span className="doc-component__state-label">Error</span>
            </div>
          </div>
        </div>

        {/* Alert */}
        <div className="doc-component">
          <header className="doc-component__header">
            <h3 className="doc-component__name">{componentDocs[2].name}</h3>
            <span className="doc-component__tag">{componentDocs[2].tag}</span>
          </header>
          <p className="doc-component__desc">{componentDocs[2].desc}</p>
          <div className="doc-component__showcase doc-component__showcase--stack">
            <div className="doc-component__state">
              <span className="doc-component__state-label">Success</span>
              <Alert variant="success" persistent title="Action complete">Your changes have been saved.</Alert>
            </div>
            <div className="doc-component__state">
              <span className="doc-component__state-label">Warning</span>
              <Alert variant="warning" persistent title="Proceed with caution">This may affect connected components.</Alert>
            </div>
            <div className="doc-component__state">
              <span className="doc-component__state-label">Error</span>
              <Alert variant="error" persistent title="Something went wrong">Unable to process your request.</Alert>
            </div>
          </div>
        </div>

        {/* Loader */}
        <div className="doc-component">
          <header className="doc-component__header">
            <h3 className="doc-component__name">{componentDocs[3].name}</h3>
            <span className="doc-component__tag">{componentDocs[3].tag}</span>
          </header>
          <p className="doc-component__desc">{componentDocs[3].desc}</p>
          <div className="doc-component__showcase">
            <div className="doc-component__state">
              <Loader state="idle" label="Idle" />
              <span className="doc-component__state-label">Idle</span>
            </div>
            <div className="doc-component__state">
              <Loader state="loading" label="Loading" />
              <span className="doc-component__state-label">Loading</span>
            </div>
            <div className="doc-component__state">
              <Loader state="complete" label="Complete" />
              <span className="doc-component__state-label">Complete</span>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="doc-component">
          <header className="doc-component__header">
            <h3 className="doc-component__name">{componentDocs[4].name}</h3>
            <span className="doc-component__tag">{componentDocs[4].tag}</span>
          </header>
          <p className="doc-component__desc">{componentDocs[4].desc}</p>
          <div className="doc-component__showcase doc-component__showcase--cards">
            <Card variant="action" title="Action" subtitle="Conversion-focused"
              actions={<SuccessButton>Get Started</SuccessButton>}>
              <p>High-priority surface for decisions.</p>
            </Card>
            <Card variant="passive" title="Passive" subtitle="Observational">
              <p>A steady surface for data and information.</p>
            </Card>
            <Card variant="minimal" title="Minimal" subtitle="Low cognitive load">
              <p>A quiet surface — reduced visual chrome.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Design Tokens ── */}
      <section className="documentation-page__section">
        <SectionHeader
          title="Design Tokens"
          subtitle="Color · Spacing · Typography"
        />

        <div className="doc-tokens-grid">

          {/* Colors */}
          <div className="doc-token-group">
            <p className="doc-token-group__label">Color</p>
            <div className="doc-color-row">
              {colorChips.map(({ mod, label }) => (
                <div key={mod} className="doc-color-chip">
                  <div className={`doc-color-chip__swatch doc-color-chip__swatch--${mod}`} />
                  <span className="doc-color-chip__name">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacing */}
          <div className="doc-token-group">
            <p className="doc-token-group__label">Spacing</p>
            <div className="doc-space-rows">
              {spacingRows.map(({ mod, token, value }) => (
                <div key={token} className="doc-space-row">
                  <div className={`doc-space-row__bar doc-space-row__bar--${mod}`} />
                  <span className="doc-space-row__label">{token}</span>
                  <span className="doc-space-row__value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="doc-token-group doc-token-group--full">
            <p className="doc-token-group__label">Typography Scale</p>
            <div className="doc-type-rows">
              {typeRows.map(({ mod, token, value, sample }) => (
                <div key={token} className="doc-type-row">
                  <span className="doc-type-row__meta">{token} · {value}</span>
                  <p className={`doc-type-row__sample doc-type-row__sample--${mod}`}>{sample}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}

export default DocumentationPage
