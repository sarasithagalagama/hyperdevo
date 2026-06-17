"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initialTheme = stored ?? systemTheme;
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  const isLight = mounted && theme === "light";

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme" aria-pressed={isLight} title={isLight ? "Light mode" : "Dark mode"}>
      {isLight ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5M12 19.5V22M4.93 4.93 6.7 6.7M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M20.5 14.6A7.8 7.8 0 0 1 9.4 3.5a8.8 8.8 0 1 0 11.1 11.1Z" />
        </svg>
      )}
    </button>
  );
}
