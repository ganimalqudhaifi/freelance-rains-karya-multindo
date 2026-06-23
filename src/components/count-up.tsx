"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Numeric target to count toward. */
  value: number;
  /** Animation duration in ms. */
  duration?: number;
  className?: string;
}

export default function CountUp({
  value,
  duration = 1800,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Allow re-animation when value/duration changes.
    started.current = false;

    const reduceMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;

            // Reduced motion: jump straight to the final value.
            if (reduceMotion) {
              setDisplay(value);
              observer.unobserve(entry.target);
              return;
            }

            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              // easeOutExpo for a snappy, premium settle
              const eased =
                progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              setDisplay(Math.round(eased * value));
              if (progress < 1) {
                rafId.current = requestAnimationFrame(tick);
              }
            };
            rafId.current = requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
