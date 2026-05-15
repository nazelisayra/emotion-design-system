import './FoundationsPage.css'

/* ── Data ────────────────────────────────────────────────── */

const semanticColors = [
  { hex: '#FDFBF5', token: '--color-bg-base',         label: 'Background'      },
  { hex: '#FFFFFF', token: '--color-bg-surface',       label: 'Surface'         },
  { hex: '#0A0A12', token: '--color-bg-showcase',      label: 'Showcase'        },
  { hex: '#1A1A1A', token: '--color-text-primary',     label: 'Text Primary'    },
  { hex: '#737373', token: '--color-text-secondary',   label: 'Text Secondary'  },
  { hex: '#FFFFFF', token: '--color-text-inverse',     label: 'Text Inverse'    },
  { hex: '#A3A3A3', token: '--color-text-muted',       label: 'Text Muted'      },
  { hex: '#F6D66B', token: '--color-accent-yellow',    label: 'Accent Yellow'   },
  { hex: '#2C2C2E', token: '--color-accent-dark',      label: 'Accent Dark'     },
  { hex: '#E0E0E0', token: '--color-accent-gray',      label: 'Accent Gray'     },
]

const primaryScale = [
  { hex: '#eff6ff', label: '50'  },
  { hex: '#dbeafe', label: '100' },
  { hex: '#bfdbfe', label: '200' },
  { hex: '#93c5fd', label: '300' },
  { hex: '#60a5fa', label: '400' },
  { hex: '#3b82f6', label: '500' },
  { hex: '#2563eb', label: '600' },
  { hex: '#1d4ed8', label: '700' },
  { hex: '#1e40af', label: '800' },
  { hex: '#172554', label: '900' },
]

const secondaryScale = [
  { hex: '#f5f3ff', label: '50'  },
  { hex: '#ede9fe', label: '100' },
  { hex: '#ddd6fe', label: '200' },
  { hex: '#c4b5fd', label: '300' },
  { hex: '#a78bfa', label: '400' },
  { hex: '#8b5cf6', label: '500' },
  { hex: '#7c3aed', label: '600' },
  { hex: '#6d28d9', label: '700' },
  { hex: '#5b21b6', label: '800' },
  { hex: '#4c1d95', label: '900' },
]

const neutralScale = [
  { hex: '#f9fafb', label: '50'  },
  { hex: '#f3f4f6', label: '100' },
  { hex: '#e5e7eb', label: '200' },
  { hex: '#d1d5db', label: '300' },
  { hex: '#9ca3af', label: '400' },
  { hex: '#6b7280', label: '500' },
  { hex: '#4b5563', label: '600' },
  { hex: '#374151', label: '700' },
  { hex: '#1f2937', label: '800' },
  { hex: '#111827', label: '900' },
]

const statusColors = [
  { hex: '#10b981', accent: '#34d399', label: 'Success', token: '--color-success-500' },
  { hex: '#f59e0b', accent: '#fbbf24', label: 'Warning', token: '--color-warning-500' },
  { hex: '#ef4444', accent: '#f87171', label: 'Danger',  token: '--color-danger-500'  },
  { hex: '#3b82f6', accent: '#60a5fa', label: 'Info',    token: '--color-primary-500' },
]

const typeScale = [
  { token: '--font-size-xs',  value: '0.75rem',  px: '12px', sample: 'Tags, dates, small labels'             },
  { token: '--font-size-sm',  value: '0.875rem', px: '14px', sample: 'Regular list items, secondary text'    },
  { token: '--font-size-md',  value: '1rem',     px: '16px', sample: 'Base body text, button text'           },
  { token: '--font-size-lg',  value: '1.25rem',  px: '20px', sample: 'Card titles, section headings'         },
  { token: '--font-size-xl',  value: '1.5rem',   px: '24px', sample: 'Medium numbers, highlighted names'     },
  { token: '--font-size-2xl', value: '2.5rem',   px: '40px', sample: 'Greeting — Welcome'                    },
  { token: '--font-size-3xl', value: '3.5rem',   px: '56px', sample: '203'                                   },
]

const fontWeights = [
  { token: '--font-weight-light',    value: '300', label: 'Light'    },
  { token: '--font-weight-regular',  value: '400', label: 'Regular'  },
  { token: '--font-weight-medium',   value: '500', label: 'Medium'   },
  { token: '--font-weight-semibold', value: '600', label: 'Semibold' },
]

const spacingScale = [
  { token: '--space-2xs', value: '0.25rem', px: '4px'  },
  { token: '--space-xs',  value: '0.5rem',  px: '8px'  },
  { token: '--space-sm',  value: '0.75rem', px: '12px' },
  { token: '--space-md',  value: '1rem',    px: '16px' },
  { token: '--space-lg',  value: '1.5rem',  px: '24px' },
  { token: '--space-xl',  value: '2rem',    px: '32px' },
  { token: '--space-2xl', value: '3rem',    px: '48px' },
]

const radiiScale = [
  { token: '--radius-sm',     value: '8px',    style: '8px'    },
  { token: '--radius-md',     value: '16px',   style: '16px'   },
  { token: '--radius-lg',     value: '24px',   style: '24px'   },
  { token: '--radius-xl',     value: '32px',   style: '32px'   },
  { token: '--radius-pill',   value: '9999px', style: '9999px' },
  { token: '--radius-circle', value: '50%',    style: '50%'    },
]

const emotionLayer = [
  {
    name: 'Trust',
    desc: 'Conveys reliability and stability. Used for primary actions and brand anchors.',
    bg: '#0A0A12',
    tokens: [
      { label: 'Background', color: '#3b82f6' },
      { label: 'Foreground', color: '#FFFFFF'  },
      { label: 'Border',     color: '#2563eb'  },
    ],
  },
  {
    name: 'Focus',
    desc: 'Low-arousal, high-clarity surfaces for reading and concentration.',
    bg: '#0A0A12',
    tokens: [
      { label: 'Background', color: 'rgba(255,255,255,0.7)' },
      { label: 'Foreground', color: '#1A1A1A'               },
      { label: 'Border',     color: '#F0F0F0'               },
    ],
  },
  {
    name: 'Action',
    desc: 'Attention-driving accents for CTAs, conversions, and decisions.',
    bg: '#0A0A12',
    tokens: [
      { label: 'Background', color: '#F6D66B' },
      { label: 'Foreground', color: '#1A1A1A' },
      { label: 'Glow',       color: '#8b5cf6' },
    ],
  },
]

/* ── Component ───────────────────────────────────────────── */

function FoundationsPage() {
  return (
    <div className="foundations">
      <header style={{ textAlign: 'center' }}>
        <h1 className="foundations__title">Foundations</h1>
        <p className="foundations__subtitle">Tokens · Typography · Color · Spacing</p>
      </header>

      {/* ── Colors ── */}
      <section className="fdn-section">
        <h2 className="fdn-section__heading">Color</h2>
        <p className="fdn-section__desc">Semantic · Scale · Status</p>

        <div className="fdn-swatch-group">
          <p className="fdn-swatch-group__label">Semantic Tokens</p>
          <div className="fdn-swatches">
            {semanticColors.map(({ hex, token, label }) => (
              <div key={token} className="fdn-swatch">
                <div className="fdn-swatch__chip" style={{ background: hex }} />
                <span className="fdn-swatch__name">{label}</span>
                <span className="fdn-swatch__hex">{hex}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fdn-swatch-group">
          <p className="fdn-swatch-group__label">Primary — Blue</p>
          <div className="fdn-scale">
            {primaryScale.map(({ hex, label }) => (
              <div key={label} className="fdn-scale__stop">
                <div className="fdn-scale__chip" style={{ background: hex }} />
                <span className="fdn-scale__label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fdn-swatch-group">
          <p className="fdn-swatch-group__label">Secondary — Purple</p>
          <div className="fdn-scale">
            {secondaryScale.map(({ hex, label }) => (
              <div key={label} className="fdn-scale__stop">
                <div className="fdn-scale__chip" style={{ background: hex }} />
                <span className="fdn-scale__label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fdn-swatch-group">
          <p className="fdn-swatch-group__label">Neutral — Gray</p>
          <div className="fdn-scale">
            {neutralScale.map(({ hex, label }) => (
              <div key={label} className="fdn-scale__stop">
                <div className="fdn-scale__chip" style={{ background: hex }} />
                <span className="fdn-scale__label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fdn-swatch-group">
          <p className="fdn-swatch-group__label">Semantic Status</p>
          <div className="fdn-status-row">
            {statusColors.map(({ hex, accent, label, token }) => (
              <div key={token} className="fdn-status">
                <div className="fdn-status__chip" style={{ background: `linear-gradient(135deg, ${hex} 50%, ${accent} 100%)` }} />
                <span className="fdn-status__label">{label}</span>
                <span className="fdn-status__hex">{hex} · {accent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typography ── */}
      <section className="fdn-section">
        <h2 className="fdn-section__heading">Typography</h2>
        <p className="fdn-section__desc">Poppins · Inter · System UI</p>

        <div className="fdn-type-scale">
          {typeScale.map(({ token, value, px, sample }) => (
            <div key={token} className="fdn-type-row">
              <div className="fdn-type-row__meta">
                <span className="fdn-type-row__token">{token}</span>
                <span className="fdn-type-row__size">{value} — {px}</span>
              </div>
              <p className="fdn-type-row__sample" style={{ fontSize: value }}>
                {sample}
              </p>
            </div>
          ))}
        </div>

        <div className="fdn-swatch-group">
          <p className="fdn-swatch-group__label">Font Weights</p>
          <div className="fdn-weights">
            {fontWeights.map(({ token, value, label }) => (
              <div key={token} className="fdn-weight">
                <p className="fdn-weight__sample" style={{ fontWeight: value }}>
                  Emotion DS
                </p>
                <span className="fdn-weight__label">{label} · {value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spacing & Radii ── */}
      <section className="fdn-section">
        <h2 className="fdn-section__heading">Spacing &amp; Radii</h2>
        <p className="fdn-section__desc">Scale · Structure · Shape</p>

        <div className="fdn-swatch-group">
          <p className="fdn-swatch-group__label">Spacing Scale</p>
          <div className="fdn-spacing">
            {spacingScale.map(({ token, value, px }) => (
              <div key={token} className="fdn-space-row">
                <div className="fdn-space-row__bar" style={{ width: px }} />
                <div className="fdn-space-row__meta">
                  <span className="fdn-space-row__token">{token}</span>
                  <span className="fdn-space-row__value">{value} — {px}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fdn-swatch-group">
          <p className="fdn-swatch-group__label">Border Radius</p>
          <div className="fdn-radii">
            {radiiScale.map(({ token, value, style }) => (
              <div key={token} className="fdn-radius">
                <div className="fdn-radius__box" style={{ borderRadius: style }} />
                <span className="fdn-radius__token">{token.replace('--radius-', '')}</span>
                <span className="fdn-radius__value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emotion Tokens ── */}
      <section className="fdn-section">
        <h2 className="fdn-section__heading">Emotion Layer</h2>
        <p className="fdn-section__desc">Trust · Focus · Action</p>

        <div className="fdn-emotion-grid">
          {emotionLayer.map(({ name, desc, tokens }) => (
            <div key={name} className="fdn-emotion-card">
              <p className="fdn-emotion-card__name">{name}</p>
              <p className="fdn-emotion-card__desc">{desc}</p>
              <div className="fdn-emotion-card__tokens">
                {tokens.map(({ label, color }) => (
                  <div key={label} className="fdn-emotion-token">
                    <div className="fdn-emotion-token__chip" style={{ background: color }} />
                    <span className="fdn-emotion-token__name">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FoundationsPage
