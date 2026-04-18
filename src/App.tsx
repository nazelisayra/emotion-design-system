import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="center">
      <h1>Emotion Design System</h1>

      <div className="hero">
        <img src={heroImg} alt="Hero" className="base" />
      </div>

      <DownloadButton href={heroImg} filename="hero.png" label="Download Hero" />
    </div>
  )
}

export default App
