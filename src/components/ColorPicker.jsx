import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("red");

  return (
    <div className="max-w-sm mx-auto mt-6 p-6 text-center rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">
        Color Picker Preview
      </h2>

      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
      </select>

      <div
        className="w-full h-32 rounded-lg"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ColorPicker;