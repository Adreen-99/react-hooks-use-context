import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme";

function DarkModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default DarkModeToggle;
