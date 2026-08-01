import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'classic';
  });

  const [isBlurring, setIsBlurring] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = (event) => {
    const nextTheme = theme === 'classic' ? 'warm' : 'classic';

    const hasMouseEvent =
      event && typeof event === 'object' && 'clientX' in event;

    const x = hasMouseEvent ? event.clientX : window.innerWidth / 2;
    const y = hasMouseEvent ? event.clientY : window.innerHeight / 2;

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath:
            nextTheme === 'warm' ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 600,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement:
            nextTheme === 'warm'
              ? '::view-transition-new(root)'
              : '::view-transition-old(root)',
        }
      );
    });
  };

  const triggerPageBlur = (callback) => {
    setIsBlurring(true);

    setTimeout(() => {
      if (callback) callback();
    }, 200);

    setTimeout(() => {
      setIsBlurring(false);
    }, 200);
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