export const Flex = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] bg-gray-300 dark:bg-slate-900 transition-colors p-6">
            <h1 className="text-3xl font-bold mb-4 border bg-amber-500 text-white p-2 rounded">
                Flex component
            </h1>

            <p className="text-emerald-700 dark:text-emerald-400 mb-4 mx-10 max-w-2xl text-center">
                Eiusmod quis dolor id exercitation laboris nostrud. Est aute adipisicing voluptate aliqua esse pariatur. Id eu ea voluptate minim reprehenderit consequat non eiusmod officia pariatur cupidatat sunt laboris. Ea ad ad cupidatat fugiat labore voluptate ullamco reprehenderit dolor nostrud nisi. In culpa non consequat ipsum laborum dolore.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded cursor-pointer transition-colors">
                Click me!
            </button>
        </div>
    )
}
