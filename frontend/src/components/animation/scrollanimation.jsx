import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins outside of the component lifecycle
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

const SmoothScroll = ({ children }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    // Create the smooth scroller
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });

    // Cleanup function to kill the instance when the component unmounts
    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <>
      {/* 
        Global styles required for ScrollSmoother to work properly. 
        You can also move these to your global CSS file (e.g., index.css or App.css) 
      */}
      <style>{`
        body {
          overscroll-behavior: none;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>

      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          {children}
        </div>
      </div>
    </>
  );
};

export default SmoothScroll;