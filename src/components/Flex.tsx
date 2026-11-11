export const Flex = () => {
    return (
        <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-amber-200 bg-amber-50 p-6 text-center shadow-sm">
            <h1 className="mb-4 border border-amber-300 bg-amber-500 p-2 text-3xl font-bold text-white">
                Flex Component
            </h1>
            <p className="mx-10 mb-4 text-emerald-700">
                This is a simple flex component.
            </p>
            <button className="rounded bg-sky-700 px-4 py-2 text-white transition hover:bg-sky-900">
                Click me!
            </button>
        </div>
    );
};