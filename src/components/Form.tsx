export const Form = () => {
  return (
    <div className="flex flex-col">
      <h2 className="my-4 text-center text-xl font-bold">
        Registrar productos
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto my-4 flex w-1/2 flex-col gap-4 rounded bg-gray-200 p-5 dark:bg-slate-800 dark:ring-1 dark:ring-slate-700"
      >
        <input
          className="w-full rounded border bg-white p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
          type="text"
          name="nombre_producto"
          id="nombre"
          placeholder="Digite el nombre del producto"
        />
        <input
          className="w-full rounded border bg-white p-2 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
          type="number"
          name="precio_producto"
          id="precio"
          placeholder="Digite el precio del producto"
        />
        <button
          className="cursor-pointer rounded bg-sky-700 py-2 text-white hover:bg-sky-900"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};