import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 text-center rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Basic Counter</h2>

      <p className="text-4xl font-bold mb-5">{count}</p>

      <div className="flex justify-center gap-3">
        <button
          onClick={decrease}
          className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          −
        </button>

        <button
          onClick={increase}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;