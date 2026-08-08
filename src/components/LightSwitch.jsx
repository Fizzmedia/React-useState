import { useState } from "react";

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="max-w-sm mx-auto mt-6 p-6 text-center rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Light Switch</h2>

      <button
        onClick={toggleLight}
        className={
          isOn
            ? "px-6 py-3 rounded-lg text-white font-semibold bg-yellow-500 hover:bg-yellow-600"
            : "px-6 py-3 rounded-lg text-white font-semibold bg-gray-700 hover:bg-gray-800"
        }
      >
        {isOn ? "💡 Light is ON" : "🌑 Light is OFF"}
      </button>
    </div>
  );
}

export default LightSwitch;