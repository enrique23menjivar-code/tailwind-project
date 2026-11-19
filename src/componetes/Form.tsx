export const Form = () => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-72px)] bg-white dark:bg-slate-900 dark:text-white transition-colors p-6">
            <h2 className="text-xl font-bold mb-4 text-center">
                Resgistro productos
            </h2>
            <div className="mt-6 bg-gray-200 dark:bg-slate-800 dark:border-slate-700 p-5 rounded mx-auto mb-4 w-full max-w-md border flex flex-col gap-4">
                <input
                    className="p-2 border rounded bg-white text-slate-900 dark:bg-slate-900 dark:text-white dark:border-slate-600 w-full"
                    type="text"
                    name="nombre_producto"
                    id="nombre"
                    placeholder="Digite el nombre del producto"
                />
                <input
                    className="p-2 border rounded bg-white text-slate-900 dark:bg-slate-900 dark:text-white dark:border-slate-600 w-full"
                    type="text"
                    name="precio_producto"
                    id="precio"
                    placeholder="Digite el precio del producto"
                />
                <button
                    className="bg-sky-700 px-4 py-2 rounded text-white hover:bg-sky-900 cursor-pointer transition-colors"
                >
                    Enviar
                </button>
            </div>
        </div>
    )
}
