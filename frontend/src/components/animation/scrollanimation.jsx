import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Safe SSR / Browser check for plugin registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

const SmoothScroll = ({ children }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    // gsap.context safely scopes selectors and automatically cleans up everything
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        // Desktop smooth duration in seconds (1.3s gives that weighted, fluid feel)
        smooth: 1.3,
        // Enable smooth scrolling on touch screens (0.15 - 0.2 gives a native feel with luxury inertia)
        smoothTouch: 0.15,
        // Enables data-speed & data-lag parallax attributes on child elements
        effects: true,
        // Normalizes scroll differences across devices/trackpads/touchscreens
        normalizeScroll: {
          allowNestedScroll: true, // Prevents breaking inner scrollable containers (e.g. modals, carousels)
        },
        // Helps avoid address-bar resize jumping issues on mobile browsers
        ignoreMobileResize: true,
      });
    }, wrapperRef);

    return () => ctx.revert(); // Clean up triggers & smooth instances on unmount
  }, []);

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          overscroll-behavior: none;
          -webkit-font-smoothing: antialiased;
        }

        #smooth-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        #smooth-content {
          width: 100%;
          min-height: 100vh;
          /* Hardware acceleration to prevent mobile stutter */
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          will-change: transform;
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