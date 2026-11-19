import Boton from '../boton';

function BotonesApp() {
  return (
    <div className="min-h-[calc(100vh-72px)] p-6 bg-white text-slate-900 dark:bg-slate-900 dark:text-white transition-colors space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Componentes Reutilizables y Variantes de Botones</h2>
        <div className="flex flex-wrap gap-4">
          <Boton variante="primario" onClick={() => alert('Guardado correctamente')}>
            Guardar Cambios
          </Boton>

          <Boton variante="secundario" onClick={() => alert('Operación cancelada')}>
            Cancelar
          </Boton>

          <Boton variante="peligro" onClick={() => alert('Registro eliminado')}>
            Eliminar Usuario
          </Boton>

          {/* Variante 'exito' del reto */}
          <Boton variante="exito" onClick={() => alert('Proceso completado')}>
            Completado
          </Boton>

          {/* Botón deshabilitado del reto */}
          <Boton variante="primario" disabled={true} onClick={() => alert('No debería salir')}>
            Deshabilitado
          </Boton>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Clases Globales (@layer components)</h3>
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
      </div>
    </div>
  );
}

export default BotonesApp;
