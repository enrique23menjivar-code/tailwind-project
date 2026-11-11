export const Grid = () => {
    const items = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <div className="grid grid-cols-1 gap-4 p-4 text-center sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <div key={item} className="rounded bg-gray-200 p-4 text-gray-800 shadow-sm">
                    Item {item}
                </div>
            ))}
        </div>
    );
};