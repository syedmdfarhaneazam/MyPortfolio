import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolio-theme") || "dark",
  );
  const [weather, setWeather] = useState(
    localStorage.getItem("portfolio-weather") || "clear",
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const storedWeather = localStorage.getItem("portfolio-weather");
    setTheme(storedTheme);
    setWeather(storedWeather);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-weather", weather);
  }, [weather]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("portfolio-theme", newTheme);
      return newTheme;
    });
  };
  function toggleWeather(newWeather) {
    localStorage.setItem("portfolio-weather", newWeather);
    setWeather(newWeather);
  }

  const value = {
    theme,
    toggleTheme,
    weather,
    toggleWeather,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
