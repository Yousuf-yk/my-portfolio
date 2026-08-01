import React, { createContext, useState, useEffect, useCallback } from 'react';

export const ThemeContext = createContext();

const styleId = 'theme-transition-styles';

const updateStyles = (css) => {
  let styleElement = document.getElementById(styleId);
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }
  styleElement.textContent = css;
};

const createAnimation = () => ({
  css: `
    ::view-transition-group(root) {
      animation-duration: 2s;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }

    ::view-transition-old(root) {
      animation: none !important;
      z-index: 1;
    }

    ::view-transition-new(root) {
      animation-name: reveal-center;
      z-index: 9999;
      mix-blend-mode: normal;
    }

    @keyframes reveal-center {
      0% {
        clip-path: circle(0% at 50% 50%);
        filter: blur(12px) brightness(1.05);
      }
      40% {
        filter: blur(6px) brightness(1.02);
      }
      100% {
        clip-path: circle(150% at 50% 50%);
        filter: blur(0px) brightness(1);
      }
    }
  `,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'classic';
  });

  const [isBlurring, setIsBlurring] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (theme === 'warm') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'classic' ? 'warm' : 'classic';
    const animation = createAnimation();
    updateStyles(animation.css);

    const switchTheme = () => {
      setTheme(nextTheme);
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [theme]);

  const triggerPageBlur = (callback) => {
    setIsBlurring(true);
    setTimeout(() => {
      callback?.();
    }, 180);

    setTimeout(() => {
      setIsBlurring(false);
    }, 180);
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