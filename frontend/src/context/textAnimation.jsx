import React, { createContext, useContext } from 'react';

// 1. Create the Context
const TextAnimationContext = createContext();

// 2. Define ONLY the animation mechanics
const animationStyles = `
  /* Prevent the entire page from stretching horizontally on mobile */
  body {
    overflow-x: hidden;
  }

  .animated-char {
    display: inline-block;
    animation: slideLeft 1.5s forwards;
    opacity: 0;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    
    /* Hardware acceleration for smoother mobile animations */
    will-change: transform, opacity; 
  }

  @keyframes slideLeft {
    from {
      opacity: 0;
      /* Reduced from 200px to 40px to keep elements within mobile bounds */
      transform: translateX(40px); 
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

// 3. Create the Provider
export const TextAnimationProvider = ({ children, delaySpeed = 0.1 }) => {
  return (
    <TextAnimationContext.Provider value={{ delaySpeed }}>
      <style>{animationStyles}</style>
      {children}
    </TextAnimationContext.Provider>
  );
};

// 4. Create the Reusable Polymorphic Component
export const AnimatedText = ({ as: Component = 'span', text, className = '', ...rest }) => {
  const { delaySpeed } = useContext(TextAnimationContext);
  
  // Pre-calculate indexes for the animation delay so they remain sequential
  let currentIndex = 0;
  const words = text.split(' ').map(word => {
    const chars = word.split('').map(char => {
      const charData = { char, index: currentIndex };
      currentIndex++; // Increment index for each character
      return charData;
    });
    currentIndex++; // Increment index for the space between words
    return chars;
  });

  return (
    <Component className={className} {...rest}>
      {words.map((wordChars, wordIndex) => (
        // Wrapper span for the word to prevent breaking in the middle
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          
          {/* Render individual animated characters */}
          {wordChars.map((item, charIndex) => (
            <span
              key={charIndex}
              className="animated-char"
              style={{ animationDelay: `${item.index * delaySpeed}s` }}
            >
              {item.char}
            </span>
          ))}

          {/* Add a non-breaking space after the word (except for the last word) */}
          {wordIndex !== words.length - 1 && <span>&nbsp;</span>}
          
        </span>
      ))}
    </Component>
  );
};