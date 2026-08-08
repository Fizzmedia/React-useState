import { useState } from "react";

function StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    setCount(count + step);
  };

  const decrease = () => {
    if (count - step >= 0) {
      setCount(count - step);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-6 p-6 text-center rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Step Counter</h2>

      <p className="text-4xl font-bold mb-4">{count}</p>

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Step Size
        </label>

        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="w-24 border border-gray-300 rounded-lg px-3 py-2 text-center"
        />
      </div>

      <div className="flex justify-center gap-3">
        <button
          onClick={decrease}
          className="px-5 py-2 rounded-lg text-white font-semibold bg-red-500 hover:bg-red-600"
        >
          -
        </button>

        <button
          onClick={increase}
          className="px-5 py-2 rounded-lg text-white font-semibold bg-green-500 hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default StepCounter;