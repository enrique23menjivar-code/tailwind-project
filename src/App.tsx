import Boton from './components/Boton'

interface AppProps {
  darkMode?: boolean
  onToggleDarkMode?: () => void
}

/**
 * ============================================================================
 * ARCHIVO: src/App.tsx
 * PANTALLA PRINCIPAL (VISTA APP) Y PRUEBAS DE LA GUÍA PRÁCTICA
 * ============================================================================
 * - Importa y prueba el componente reutilizable <Boton /> según la guía.
 * - Incluye las pruebas de:
 *   1. Sección 3 (Opción 1): Componente reutilizable <Boton /> y prop className.
 *   2. Sección 4 (Opción 2): Clase global .mi-boton-global (@layer components).
 *   3. Sección 6 (Variantes): primario ("Guardar Cambios"), secundario ("Cancelar")
 *      y peligro ("Eliminar Usuario") con eventos onClick diferenciados.
 *   4. Reto Adicional: variante "exito", propiedad disabled y Modo Oscuro.
 */
function App({ darkMode = false, onToggleDarkMode }: AppProps) {
  return (
    <div className="space-y-8">
      {/* Tarjeta principal de bienvenida */}
      <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:ring-slate-700">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
          App
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          Hello world!
        </h1>
        <p className="mb-6 max-w-2xl text-slate-600 dark:text-slate-300">
          Este es el contenido principal de la aplicación con las pruebas completas del componente reutilizable Boton y sus variantes.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Boton variante="primario" onClick={() => alert('Bienvenido a la aplicación')}>
            Enter
          </Boton>
          <span className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            Contenedor de ejemplo
          </span>
        </div>
      </section>

      {/* Sección 3: Opción 1 - Componente Reutilizable (<Boton />) */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:ring-slate-700">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
          Sección 3 — Opción 1: Componente Reutilizable (&lt;Boton /&gt;)
        </p>
        <div className="flex flex-wrap gap-4">
          <Boton onClick={() => alert('Guardado')}>
            Guardar
          </Boton>

          <Boton
            onClick={() => alert('Eliminado')}
            className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
          >
            Eliminar
          </Boton>
        </div>
      </section>

      {/* Sección 4: Opción 2 - Clases Globales (@layer components) */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:ring-slate-700">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-400">
          Sección 4 — Opción 2: Clases Globales (.mi-boton-global)
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="mi-boton-global" onClick={() => alert('Aceptar')}>
            Aceptar
          </button>

          <button
            className="mi-boton-global bg-gray-500 hover:bg-gray-600"
            onClick={() => alert('Cancelar')}
          >
            Cancelar
          </button>
        </div>
      </section>

      {/* Sección 6: Variantes de Botones y Retos Adicionales */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:ring-slate-700">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
          Sección 6 y Reto Adicional — Variantes de Botones
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Tres variantes principales exigidas por la guía */}
          <Boton variante="primario" onClick={() => alert('Guardado correctamente')}>
            Guardar Cambios
          </Boton>

          <Boton variante="secundario" onClick={() => alert('Operación cancelada')}>
            Cancelar
          </Boton>

          <Boton variante="peligro" onClick={() => alert('Registro eliminado')}>
            Eliminar Usuario
          </Boton>

          {/* Reto Adicional Tarea 1: Variante 'exito' */}
          <Boton variante="exito" onClick={() => alert('Operación exitosa')}>
            Confirmar Éxito
          </Boton>

          {/* Reto Adicional Tarea 2: Propiedad 'disabled' */}
          <Boton variante="primario" disabled onClick={() => alert('Deshabilitado')}>
            Deshabilitado
          </Boton>

          {/* Reto Adicional Tarea 3: Alternar Modo Claro / Modo Oscuro */}
          {onToggleDarkMode && (
            <Boton variante="secundario" onClick={onToggleDarkMode}>
              {darkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
            </Boton>
          )}
        </div>
      </section>
    </div>
  )
}

export default App
