"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";

    const stored = localStorage.getItem("theme") as Theme | null;
    return stored ?? "light";
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  // 🔥 Sync HTML class with theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setTheme((prev) => {
        const next = prev === "light" ? "dark" : "light";
        localStorage.setItem("theme", next);
        return next;
      });
    }, 180);
  };

  // animation cleanup
  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [isTransitioning]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useTheme must be used inside ThemeContextProvider");
  return ctx;
}
