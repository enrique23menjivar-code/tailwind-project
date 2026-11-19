import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BotonesApp from './componetes/app.tsx'
import { Flex } from './componetes/Flex.tsx'
import { Form } from './componetes/Form.tsx'
import { Grid } from './componetes/Grid.tsx'
import Index from './componetes/Index.tsx'
import { Navbar } from './componetes/Navbar.tsx'

function Root() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <HashRouter>
      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/app" element={<App />} />
        <Route path="/botones" element={<BotonesApp />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </HashRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
