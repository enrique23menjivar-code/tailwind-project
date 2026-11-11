

import { Flex } from './components/Flex'
import { Grid } from './components/Grid'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="bg-slate-900 text-white shadow-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold">Tailwind Project</div>
          <div className="flex gap-4 text-sm md:text-base">
            <a href="#app" className="hover:text-sky-300">App</a>
            <a href="#flex" className="hover:text-sky-300">Flex</a>
            <a href="#grid" className="hover:text-sky-300">Grid</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl space-y-8 px-6 py-8">
        <section id="app" className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            App
          </p>
          <h1 className="mb-4 text-4xl font-bold text-slate-900">Hello world!</h1>
          <p className="mb-6 max-w-2xl text-slate-600">
            Este es el contenido principal de la aplicación con una vista de inicio y un botón de acción.
          </p>

          <div className="flex items-center gap-4">
            <button className="rounded bg-sky-700 px-5 py-2.5 text-white transition hover:bg-sky-900">
              Enter
            </button>
            <span className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              Contenedor de ejemplo
            </span>
          </div>
        </section>

        <section id="flex" className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Flex
          </p>
          <Flex />
        </section>

        <section id="grid" className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Grid
          </p>
          <Grid />
        </section>
      </main>
    </div>
  )
}

export default App
