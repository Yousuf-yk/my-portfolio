import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('classic');
  const [isBlurring, setIsBlurring] = useState(false);

  const toggleTheme = () => {
    setIsBlurring(true);
    setTimeout(() => {
      const nextTheme = theme === 'classic' ? 'warm' : 'classic';
      setTheme(nextTheme);
      document.documentElement.setAttribute('theme', nextTheme);
    }, 4000); // Trigger mid-way through animation

    setTimeout(() => {
      setIsBlurring(false);
    }, 800);
  };

  const triggerPageBlur = (callback) => {
    setIsBlurring(true);
    setTimeout(() => {
      if (callback) callback();
    }, 400);
    setTimeout(() => {
      setIsBlurring(false);
    }, 800);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isBlurring, triggerPageBlur }}>
      {children}
    </ThemeContext.Provider>
  );
};