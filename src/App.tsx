import { Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar/NavBar'
import Home from './pages/Home'
import ComponentsPage from './pages/ComponentsPage'
import FoundationsPage from './pages/FoundationsPage'
import DocumentationPage from './pages/DocumentationPage'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/foundations" element={<FoundationsPage />} />
        <Route path="/about" element={<DocumentationPage />} />
      </Routes>
    </>
  )
}

export default App
