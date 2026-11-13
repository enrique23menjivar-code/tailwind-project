import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Index from '../Index'
import App from '../App'
import { Flex } from '../components/Flex'
import { Grid } from '../components/Grid'
import { Form } from '../components/Form'
import Boton from '../components/Boton'

/**
 * ============================================================================
 * ARCHIVO: src/routes/AppRoutes.tsx
 * ENRUTADOR PRINCIPAL, NAVEGACIÓN Y CONTROL DE MODO CLARO / OSCURO
 * ============================================================================
 * - Define `Index` (`src/Index.tsx`) como la página de inicio en la ruta raíz ("/").
 * - Gestiona el estado `darkMode` (iniciando en modo claro por defecto) y
 *   alterna la clase `.dark` en `document.documentElement`.
 */
export const AppRoutes = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 transition-colors dark:bg-slate-900 dark:text-slate-100">
      <header className="bg-slate-900 text-white shadow-md dark:bg-slate-950">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold hover:text-sky-300 transition-colors">
            Tailwind Project
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium md:text-base">
            <Link to="/" className="hover:text-sky-300 transition-colors">
              Inicio
            </Link>
            <Link to="/app" className="hover:text-sky-300 transition-colors">
              App
            </Link>
            <Link to="/flex" className="hover:text-sky-300 transition-colors">
              Flex
            </Link>
            <Link to="/grid" className="hover:text-sky-300 transition-colors">
              Grid
            </Link>
            <Link to="/form" className="hover:text-sky-300 transition-colors">
              Form
            </Link>
            <Boton
              variante="secundario"
              onClick={toggleDarkMode}
              className="text-xs md:text-sm py-1.5 px-3"
            >
              {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </Boton>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <Routes>
          <Route
            path="/"
            element={<Index darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />}
          />
          <Route path="/app" element={<App />} />
          <Route path="/flex" element={<Flex />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </div>
  )
}
