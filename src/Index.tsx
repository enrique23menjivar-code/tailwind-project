import { Link } from 'react-router-dom'
import Boton from './components/Boton'

interface IndexProps {
  darkMode?: boolean
  onToggleDarkMode?: () => void
}

/**
 * ============================================================================
 * ARCHIVO RAÍZ: src/Index.tsx
 * PÁGINA DE INICIO, NAVEGACIÓN CON BOTONES Y SOLUCIÓN A LA GUÍA DE TRABAJO
 * ============================================================================
 * 1. Presenta la pantalla de inicio con acceso directo mediante links de botón
 *    hacia `App` y hacia los componentes (`Flex`, `Grid`, `Form`).
 * 2. Desarrolla cada sección de la guía de Tailwind CSS:
 *    - Sección 3 (Opción 1): Componente reutilizable <Boton /> y prop className.
 *    - Sección 4 (Opción 2): Clases globales (.mi-boton-global) con @layer.
 *    - Sección 5: Comparativa (<Boton /> recomendado en React vs @layer).
 *    - Sección 6: Variantes de botones ('primario' | 'secundario' | 'peligro').
 *    - Reto Adicional: Variante 'exito', propiedad disabled y botón cambiable
 *      de modo claro / modo oscuro (dark:).
 */
export function Index({ darkMode = false, onToggleDarkMode }: IndexProps) {
  return (
    <div className="space-y-8">
      {/* =====================================================================
          INICIO: NAVEGACIÓN PRINCIPAL MEDIANTE LINKS DE BOTÓN
          ===================================================================== */}
      <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:ring-slate-700">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
          Inicio
        </p>
        <h1 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white">
          Bienvenido a Tailwind Project
        </h1>
        <p className="mb-6 max-w-2xl text-slate-600 dark:text-slate-300">
          Accede a la pantalla principal o a cualquiera de los componentes del proyecto utilizando los siguientes botones de navegación:
        </p>

        <div className="flex flex-wrap gap-4">
          <Link to="/app">
            <Boton variante="primario">Ir a App</Boton>
          </Link>
          <Link to="/flex">
            <Boton variante="secundario">Ver Flex</Boton>
          </Link>
          <Link to="/grid">
            <Boton variante="exito">Ver Grid</Boton>
          </Link>
          <Link to="/form">
            <Boton variante="primario">Ver Formulario</Boton>
          </Link>
        </div>
      </section>

      {/* =====================================================================
          SECCIÓN 3: OPCIÓN 1 - CREAR UN COMPONENTE REUTILIZABLE (La mejor práctica)
          =====================================================================
          Solución a la guía (Sección 3, Paso 2):
          - Se importa y utiliza el componente <Boton /> pasándole `children` y `onClick`.
          - El segundo botón demuestra cómo sobreescribir colores puntuales con `className`.
      */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:ring-slate-700">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
          Sección 3 — Opción 1: Componente Reutilizable (&lt;Boton /&gt;)
        </p>
        <div className="flex flex-wrap gap-4">
          <Boton onClick={() => alert('Guardado')}>
            Guardar
          </Boton>

          {/* Puedes añadir o sobreescribir clases específicas con className */}
          <Boton onClick={() => alert('Eliminado')} className="bg-red-600 hover:bg-red-700">
            Eliminar
          </Boton>
        </div>
      </section>

      {/* =====================================================================
          SECCIÓN 4: OPCIÓN 2 - USAR CLASES GLOBALES (@layer en Tailwind)
          =====================================================================
          Solución a la guía (Sección 4, Paso 2):
          - Se aplica la clase `.mi-boton-global` definida en `src/index.css`
            directamente sobre etiquetas HTML <button> nativas.
          - Sección 5 (Comparativa): Aunque @layer es útil para etiquetas nativas,
            crear el componente <Boton /> es la opción más recomendada en React
            porque centraliza tanto los estilos como el comportamiento.
      */}
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

      {/* =====================================================================
          SECCIÓN 6: EJERCICIOS PRÁCTICOS FINALES (VARIANTES DE BOTONES)
          Y RETO ADICIONAL PARA EL ESTUDIANTE
          =====================================================================
          Solución a la guía (Sección 6, Ejercicio 2 + Reto Adicional):
          - Variantes principales: 'primario', 'secundario' y 'peligro'.
          - Reto Tarea 1: Cuarta variante 'exito' (`bg-emerald-600 hover:bg-emerald-700`).
          - Reto Tarea 2: Propiedad opcional `disabled` (`disabled:opacity-50 disabled:cursor-not-allowed`).
          - Reto Tarea 3: Modo oscuro (`dark:`) cambiable entre Modo Claro y Modo Oscuro.
      */}
      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-colors dark:bg-slate-800 dark:ring-slate-700">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
          Sección 6 y Reto Adicional — Variantes de Botones
        </p>
        <div className="flex flex-wrap gap-4">
          {/* Sección 6: Tres variantes principales */}
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

          {/* Reto Adicional Tarea 3: Botón para alternar Modo Claro / Modo Oscuro */}
          {onToggleDarkMode && (
            <Boton variante="secundario" onClick={onToggleDarkMode}>
              {darkMode ? 'Cambiar a Modo Claro ' : 'Cambiar a Modo Oscuro '}
            </Boton>
          )}
        </div>
      </section>
    </div>
  )
}

export default Index
