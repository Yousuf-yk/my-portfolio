import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // Stops ScrollTrigger from recalculating every time the mobile address bar
  // shows / hides (a major source of jumps on phones).
  ScrollTrigger.config({ ignoreMobileResize: true });

  // Don't let GSAP "catch up" after a slow frame, it causes visible jumps.
  gsap.ticker.lagSmoothing(0);
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const SmoothScroll = ({
  children,
  smooth = 1.4, // desktop / mouse smoothing
  smoothTouch = 0.1, // phones / tablets: light smoothing, native touch scroll stays in control
}) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add({ reduceMotion: REDUCED_MOTION_QUERY }, (context) => {
      // Users who asked for reduced motion get plain native scrolling.
      if (context.conditions.reduceMotion) return;

      const root = document.documentElement;
      root.classList.add("has-smoother");

      // NOTE: no normalizeScroll here. It hijacks touch input and is the usual
      // reason a page "can't be scrolled" on real phones. With smoothTouch
      // set, ScrollSmoother lets the browser scroll the window natively and
      // only eases the content on top of it.
      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth,
        smoothTouch,
        effects: true,
      });

      // Keep scroll height correct when images / route content change size.
      let raf = 0;
      const observer = new ResizeObserver(() => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => ScrollTrigger.refresh());
      });
      observer.observe(contentRef.current);

      return () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        smoother.kill();
        root.classList.remove("has-smoother");
      };
    });

    return () => mm.revert();
  }, [smooth, smoothTouch]);

  return (
    <>
      <style>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          /* "clip" hides horizontal overflow WITHOUT turning html/body into
             scroll containers (hidden does, and that can freeze touch scroll
             when ScrollSmoother is active). "hidden" is the old-browser fallback. */
          overflow-x: hidden;
          overflow-x: clip;
          overscroll-behavior-y: none;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: transparent;
        }

        html.has-smoother #smooth-wrapper {
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
        }

        html.has-smoother #smooth-content {
          overflow: visible;
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