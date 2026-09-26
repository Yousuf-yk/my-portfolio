import React, { createContext, useState, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';

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

// Generates dynamic circular reveal coordinates from click origin
const createAnimation = (originX = '50%', originY = '50%', maxRadius = 150) => ({
  css: `
    @media (prefers-reduced-motion: reduce) {
      ::view-transition-group(root),
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none !important;
      }
    }

    ::view-transition-group(root) {
      animation-duration: 0.55s;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }

    ::view-transition-old(root) {
      animation: none !important;
      z-index: 1;
    }

    ::view-transition-new(root) {
      animation: reveal-origin 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      z-index: 9999;
      mix-blend-mode: normal;
      will-change: clip-path;
    }

    @keyframes reveal-origin {
      0% {
        clip-path: circle(0px at ${originX} ${originY});
      }
      100% {
        clip-path: circle(${maxRadius}px at ${originX} ${originY});
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

  const toggleTheme = useCallback(
    (event) => {
      const nextTheme = theme === 'classic' ? 'warm' : 'classic';

      // Fallback if View Transitions API is not supported
      if (!document.startViewTransition) {
        setTheme(nextTheme);
        return;
      }

      // Calculate origin coordinates from the click/tap event
      let originX = '50%';
      let originY = '50%';
      let maxRadius = Math.hypot(window.innerWidth, window.innerHeight);

      if (event && (event.clientX !== undefined || event.nativeEvent?.clientX !== undefined)) {
        const clientX = event.clientX ?? event.nativeEvent.clientX;
        const clientY = event.clientY ?? event.nativeEvent.clientY;

        originX = `${clientX}px`;
        originY = `${clientY}px`;

        // Calculate distance from click point to the furthest corner
        const endRadius = Math.hypot(
          Math.max(clientX, window.innerWidth - clientX),
          Math.max(clientY, window.innerHeight - clientY)
        );
        maxRadius = Math.ceil(endRadius);
      }

      // Inject the computed origin keyframes
      const animation = createAnimation(originX, originY, maxRadius);
      updateStyles(animation.css);

      // flushSync guarantees the state change is committed to the DOM synchronously
      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
      });

      // Cleanup transition styles after the animation finishes
      transition.finished.finally(() => {
        updateStyles('');
      });
    },
    [theme]
  );

  const triggerPageBlur = (callback) => {
    setIsBlurring(true);
    callback?.();
    requestAnimationFrame(() => {
      setIsBlurring(false);
    });
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