import Boton from './boton'

function App() {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-white text-slate-900 dark:bg-slate-900 dark:text-white transition-colors p-6 space-y-6">
      <h1 className="bg-blue-600 text-white py-4 text-center text-3xl font-bold rounded">
        Mi aplicacion con tialwind!
      </h1>

      <div className="text-center">
        <button className="bg-sky-700 px-4 py-2 rounded text-white hover:bg-sky-900 cursor-pointer">
          invia
        </button>
      </div>

      <div className="border w-1/2 mx-auto text-center bg-gray-300 dark:bg-slate-800 dark:border-slate-700 rounded p-2">
        estes es un contenedor
      </div>

      <div className="max-w-3xl mx-auto pt-4 border-t border-gray-200 dark:border-slate-700">
        <h2 className="text-xl font-bold mb-4 text-center">Variantes de Botones</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Boton variante="primario" onClick={() => alert('Guardado correctamente')}>
            Guardar Cambios
          </Boton>

          <Boton variante="secundario" onClick={() => alert('Operación cancelada')}>
            Cancelar
          </Boton>

          <Boton variante="peligro" onClick={() => alert('Registro eliminado')}>
            Eliminar Usuario
          </Boton>

          <Boton variante="exito" onClick={() => alert('Proceso completado')}>
            Completado
          </Boton>

          <Boton variante="primario" disabled={true} onClick={() => alert('No debería salir')}>
            Deshabilitado
          </Boton>
        </div>
      </div>
    </div>
  )
}

export default App
