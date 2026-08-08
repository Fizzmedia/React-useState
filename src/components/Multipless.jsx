function Multiples() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
        <div className="max-w-sm mx-auto mt-6 p-6 text-center rounded-xl shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4">Highlight the Multiples</h2>

            <div className="space-y-2">
                {numbers.map((number) => (
                    <p className={number % 3 === 0 ? "text-blue-600" : "text-red-600"}>
                        {number}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Multiples