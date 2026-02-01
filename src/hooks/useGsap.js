import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapReveal = (options = {}) => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const {
      delay = 0,
      duration = 1.2,
      y = 60,
      x = 0,
      stagger = 0,
      scrollTrigger = true,
      scale = 1,
      rotation = 0,
      scrub = false,
      start = "top 85%",
      ease = "power4.out",
    } = options;

    const animOptions = {
      opacity: 0,
      y,
      x,
      scale,
      rotation,
      duration,
      delay,
      ease,
      clearProps: "all",
    };

    if (stagger) {
      animOptions.stagger = stagger;
    }

    if (scrollTrigger) {
      animOptions.scrollTrigger = {
        trigger: el,
        start: start,
        scrub: scrub,
        toggleActions: scrub ? "none none none none" : "play none none none",
      };
    }

    const ctx = gsap.context(() => {
      // If stagger is applied, we assume children should be animated
      if (stagger && el.children.length > 0) {
        gsap.from(Array.from(el.children), animOptions);
      } else {
        gsap.from(el, animOptions);
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return elementRef;
};

/**
 * Hook for parallax effect on an element
 */
export const useGsapParallax = (speed = 0.1) => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return elementRef;
};

/**
 * Hook for magnetic effect on buttons/items
 */
export const useGsapMagnetic = () => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.4);
      yTo(y * 0.4);
    };

    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return elementRef;
};
