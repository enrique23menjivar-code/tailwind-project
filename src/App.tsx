/**
 * ============================================================================
 * ARCHIVO: src/App.tsx
 * PANTALLA PRINCIPAL (VISTA APP)
 * ============================================================================
 * Contiene únicamente la pantalla principal de bienvenida ("Hello world!")
 * con su diseño limpio de tarjeta.
 */
function App() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
        App
      </p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
        Hello world!
      </h1>
      <p className="mb-6 max-w-2xl text-slate-600 dark:text-slate-300">
        Este es el contenido principal de la aplicación con una vista de inicio y un botón de acción.
      </p>

      <div className="flex items-center gap-4">
        <button className="rounded bg-sky-700 px-5 py-2.5 text-white transition hover:bg-sky-900 cursor-pointer">
          Enter
        </button>
        <span className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          Contenedor de ejemplo
        </span>
      </div>
    </section>
  )
}

export default App
