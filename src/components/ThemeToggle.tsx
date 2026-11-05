"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light"); //хранит состояние темы;
// useState<Theme> — указывает TypeScript допустимый тип состояния;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
// useEffect(() позволяет прочитать сохранённую тему после монтирования компонента.
 

    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(initialTheme);

    document.documentElement.classList.toggle(
      "dark",
      initialTheme === "dark",
    );
  }, []);

  function toggleTheme() {
    const nextTheme: Theme =
      theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark",
    );

    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
      className="
        rounded-lg border border-gray-300 px-4 py-2 ml-2
        text-gray-900 transition-colors duration-200
        bg-gray-200
        hover:bg-gray-100
        dark:border-gray-700 dark:text-white
        dark:hover:bg-gray-600
        dark:bg-gray-800
      "
    >
      {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
    </button>
  );
}