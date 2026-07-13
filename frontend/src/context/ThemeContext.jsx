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

  const toggleTheme = (event) => {
    const nextTheme = theme === "classic" ? "warm" : "classic";

    // Fallback for older browsers that don't support View Transitions
    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    // 1. Get the click coordinates to start the circle exactly where the mouse is
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;
    
    // 2. Calculate how big the circle needs to grow to cover the whole screen
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // 3. Trigger the View Transition
    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    // 4. Animate the clip-path iris effect once the DOM is ready
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: nextTheme === "warm" ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 500, // Adjust speed here
          easing: "ease-in-out",
          pseudoElement: nextTheme === "warm"
            ? "::view-transition-new(root)"
            : "::view-transition-old(root)",
        }
      );
    });
  };

  // Kept your original page blur logic for other transitions
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