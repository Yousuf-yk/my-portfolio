import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // Prevents ScrollTrigger from recalculating every time the mobile address
  // bar shows/hides (a major source of jumps on phones).
  ScrollTrigger.config({ ignoreMobileResize: true });

  // Don't let GSAP "catch up" after a slow frame, it causes visible jumps.
  gsap.ticker.lagSmoothing(0);
}

// Smoothing only on devices with a mouse / trackpad. Touch devices keep their
// native momentum scrolling, which is smoother than any JS emulation.
const DESKTOP_QUERY = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const SmoothScroll = ({ children, smooth = 1.4 }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      { desktop: DESKTOP_QUERY, reduceMotion: REDUCED_MOTION_QUERY },
      (context) => {
        const { desktop, reduceMotion } = context.conditions;

        // Touch devices / reduced-motion users: do nothing, native scroll.
        if (!desktop || reduceMotion) return;

        const root = document.documentElement;
        root.classList.add("has-smoother");

        const smoother = ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth,
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
      }
    );

    return () => mm.revert();
  }, [smooth]);

  return (
    <>
      <style>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: transparent;
        }

        /* Native scrolling (mobile): just stop the rubber-band bounce. */
        body {
          overscroll-behavior-y: none;
        }

        /* Fixed wrapper is ONLY applied while the smoother is running,
           so touch devices keep normal native scrolling. */
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