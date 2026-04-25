import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { DownloadButton, SuccessButton } from './components/atoms'
import Card from './components/molecules/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="center">
      <h1>Emotion Design System</h1>

      <Card
        title="Hero Preview"
        subtitle="An example hero image using the design system"
        actions={
          <>
            <SuccessButton>Apply</SuccessButton>
          </>
        }
      >
        <img src={heroImg} alt="Hero" className="base" />
      </Card>

      <div style={{ marginTop: '16px' }}>
        <DownloadButton href={heroImg} filename="hero.png" label="Download Hero" />
      </div>

      <section style={{ marginTop: '32px', width: '100%' }}>
        <h2>Card Variations</h2>
        <div style={{ display: 'grid', gap: '16px', marginTop: '12px' }}>
          {/* 1) No image */}
          <Card
            title="No Image Card"
            subtitle="This card intentionally has no image"
            actions={
              <>
                <SuccessButton>Apply</SuccessButton>
              </>
            }
          >
            <p>This card demonstrates a body with text only and no image element.</p>
          </Card>

          {/* 2) No button (no actions) */}
          <Card title="No Button Card" subtitle="No actions provided">
            <img src={heroImg} alt="Hero" className="base" />
          </Card>

          {/* 3) Just text */}
          <Card>
            <p>
              This is a minimal, text-only card. It has no header and no actions — used for
              simple inline content.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default App
