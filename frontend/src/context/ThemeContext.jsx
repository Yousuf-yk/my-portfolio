// import React, { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("classic");
//   const [isBlurring, setIsBlurring] = useState(false);

//   // Update the HTML theme whenever theme changes
//   useEffect(() => {
//     document.documentElement.setAttribute("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setIsBlurring(true);

//     setTimeout(() => {
//       setTheme((prevTheme) =>
//         prevTheme === "classic" ? "warm" : "classic"
//       );
//     }, 400);

//     setTimeout(() => {
//       setIsBlurring(false);
//     }, 400);
//   };

//   const triggerPageBlur = (callback) => {
//     setIsBlurring(true);

//     setTimeout(() => {
//       if (callback) callback();
//     }, 400);

//     setTimeout(() => {
//       setIsBlurring(false);
//     }, 800);
//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         toggleTheme,
//         isBlurring,
//         triggerPageBlur,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };



import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. Check browser storage first so the theme doesn't reset on refresh
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "classic";
  });
  
  const [isBlurring, setIsBlurring] = useState(false);

  // 2. Update the HTML attribute AND save to localStorage whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Your transition code remains exactly the same since it performs great!
  const toggleTheme = () => {
    setIsBlurring(true);

    setTimeout(() => {
      setTheme((prevTheme) =>
        prevTheme === "classic" ? "warm" : "classic"
      );
      
      setTimeout(() => {
        setIsBlurring(false);
      }, 25);
    }, 25);
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