import { useState } from "react";

function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="max-w-sm mx-auto mt-6 p-6 text-center rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Tab Switcher</h2>

      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setActiveTab("Home")}
          className={
            activeTab === "Home"
              ? "px-4 py-2 bg-blue-500 text-white rounded-lg"
              : "px-4 py-2 bg-gray-200 rounded-lg"
          }
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab("About")}
          className={
            activeTab === "About"
              ? "px-4 py-2 bg-blue-500 text-white rounded-lg"
              : "px-4 py-2 bg-gray-200 rounded-lg"
          }
        >
          About
        </button>

        <button
          onClick={() => setActiveTab("Contact")}
          className={
            activeTab === "Contact"
              ? "px-4 py-2 bg-blue-500 text-white rounded-lg"
              : "px-4 py-2 bg-gray-200 rounded-lg"
          }
        >
          Contact
        </button>
      </div>

      <div>
        {activeTab === "Home" && (
          <p>Welcome to the Home page.</p>
        )}

        {activeTab === "About" && (
          <p>This is the About page.</p>
        )}

        {activeTab === "Contact" && (
          <p>This is the Contact page.</p>
        )}
      </div>
    </div>
  );
}

export default TabSwitcher;