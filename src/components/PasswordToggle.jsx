import { useState } from "react";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-sm mx-auto mt-6 p-6 text-center rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">
        Show/Hide Password
      </h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
      />

      <button
        onClick={togglePassword}
        className="px-5 py-2 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600"
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default PasswordToggle;