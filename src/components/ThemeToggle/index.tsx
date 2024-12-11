"use client";

import { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update the theme in the HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [isDarkMode]);

  return (
      <div className="text-center">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {
            isDarkMode ? <IoSunny style={{ color: 'black' }} /> : <IoMoon />
          }
        </button>
      </div>
  );
};

export default ThemeToggle;
