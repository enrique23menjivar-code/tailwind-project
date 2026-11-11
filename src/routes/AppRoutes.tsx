import { Link, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Flex } from '../components/Flex'
import { Grid } from '../components/Grid'

const HomePage = () => (
  <div className="min-h-screen bg-slate-100 text-slate-800">
    <header className="bg-slate-900 text-white shadow-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">Tailwind Project</div>
        <div className="flex gap-4 text-sm md:text-base">
          <Link to="/app" className="hover:text-sky-300">App</Link>
          <Link to="/flex" className="hover:text-sky-300">Flex</Link>
          <Link to="/grid" className="hover:text-sky-300">Grid</Link>
        </div>
      </nav>
    </header>

    <main className="mx-auto max-w-5xl space-y-8 px-6 py-10">
      <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Index
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900">Proyecto Tailwind</h1>
        <p className="mb-6 max-w-2xl text-slate-600">
          Esta es la página principal con enlaces hacia las diferentes vistas del proyecto.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Link to="/app" className="rounded-xl bg-sky-700 p-5 text-white transition hover:bg-sky-800">
            <div className="text-lg font-semibold">App</div>
            <div className="mt-2 text-sm text-sky-100">Vista principal</div>
          </Link>

          <Link to="/flex" className="rounded-xl bg-amber-500 p-5 text-white transition hover:bg-amber-600">
            <div className="text-lg font-semibold">Flex</div>
            <div className="mt-2 text-sm text-amber-100">Diseño centrado</div>
          </Link>

          <Link to="/grid" className="rounded-xl bg-emerald-600 p-5 text-white transition hover:bg-emerald-700">
            <div className="text-lg font-semibold">Grid</div>
            <div className="mt-2 text-sm text-emerald-100">Responsive</div>
          </Link>
        </div>
      </section>
    </main>
  </div>
)

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/app" element={<App />} />
    <Route path="/flex" element={<Flex />} />
    <Route path="/grid" element={<Grid />} />
  </Routes>
)
