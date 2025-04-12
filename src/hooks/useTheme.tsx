import { useEffect, useState } from "react";

const useTheme = () => {
  const getInitialTheme = (): "light" | "dark" => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) return storedTheme;

    return "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.setAttribute('data-theme', theme);

    root.classList.toggle("dark", theme === "dark");
    body.style.transition = "background-color 0.3s ease, color 0.3s ease";

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return { theme, setTheme, toggleTheme };
};

export default useTheme;
