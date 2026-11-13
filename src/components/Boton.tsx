import React from 'react';

/**
 * ============================================================================
 * GUÍA DE IMPLEMENTACIÓN: COMPONENTE REUTILIZABLE <Boton />
 * ============================================================================
 * - Sección 3 (Opción 1): Define la interfaz BotonProps con las propiedades
 *   básicas (children, onClick, tipo, className).
 * - Sección 6 (Ejercicio 1): Agrega la propiedad opcional `variante` para
 *   evitar repetir clases de colores manualmente ('primario' | 'peligro' | 'secundario').
 * - Reto Adicional (Tarea 1): Se añade la cuarta variante 'exito'.
 * - Reto Adicional (Tarea 2): Se añade la propiedad opcional `disabled?: boolean`.
 */
interface BotonProps {
children: React.ReactNode;
onClick?: () => void;
  tipo?: "button" | "submit" | "reset";
  variante?: "primario" | "peligro" | "secundario" | "exito";
  disabled?: boolean;
  className?: string;
}

function Boton({
  children,
  onClick,
  tipo = "button",
  variante = "primario",
  disabled = false,
  className = ""
}: BotonProps) {
  /**
   * Sección 3 y Sección 6:
   * Clases base comunes para TODOS los botones (espaciado, bordes redondeados,
   * tipografía, sombra y transición), sin un color de fondo fijo para permitir variantes.
   *
   * Reto Adicional (Tarea 2 - Deshabilitado):
   * Se agregan `disabled:opacity-50 disabled:cursor-not-allowed`.
   *
   * Reto Adicional (Tarea 3 - Dark Mode):
   * Se agrega `dark:shadow-slate-900/50` para adaptar la sombra en modo oscuro.
   */
  const estilosBase =
    "px-4 py-2 rounded-lg font-semibold text-white transition-colors shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed dark:shadow-slate-900/50";

  /**
   * Sección 6 (Ejercicio 1 - Diccionario de variantes):
   * Define los colores específicos según la variante elegida:
   * - primario: tonos azules (bg-blue-600 hover:bg-blue-700)
   * - peligro: tonos rojos (bg-red-600 hover:bg-red-700)
   * - secundario: tonos grises/pizarra (bg-slate-600 hover:bg-slate-700)
   *
   * Reto Adicional (Tarea 1 - Variante 'exito'):
   * - exito: tonos verdes esmeralda (bg-emerald-600 hover:bg-emerald-700)
   *
   * Reto Adicional (Tarea 3 - Dark Mode):
   * - Incluye variantes `dark:` en cada opción de color.
   */
  const estilosVariante = {
    primario: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    peligro: "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
    secundario: "bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600",
    exito: "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
  };

  return (
    <button
      type={tipo}
      onClick={onClick}
      disabled={disabled}
      className={`${estilosBase} ${estilosVariante[variante]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Boton;

