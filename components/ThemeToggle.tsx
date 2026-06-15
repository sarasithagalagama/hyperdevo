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

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme" aria-pressed={mounted && theme === "light"}>
      <span>{mounted && theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
