import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "classic";
  });

  const [isBlurring, setIsBlurring] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsBlurring(true);

    setTimeout(() => {
      setTheme((prevTheme) =>
        prevTheme === "classic" ? "warm" : "classic"
      );
    }, 300);

    setTimeout(() => {
      setIsBlurring(false);
    }, 300);
  };

  const triggerPageBlur = (callback) => {
    setIsBlurring(true);

    setTimeout(() => {
      if (callback) callback();
    }, 300);

    setTimeout(() => {
      setIsBlurring(false);
    }, 300);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isBlurring,
        triggerPageBlur,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};