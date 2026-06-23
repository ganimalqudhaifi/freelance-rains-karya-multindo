"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Numeric target to count toward. */
  value: number;
  /** Text rendered after the number, e.g. "+". */
  suffix?: string;
  /** Animation duration in ms. */
  duration?: number;
  className?: string;
}

export default function CountUp({
  value,
  suffix = "",
  duration = 1800,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion =
      typeof window !== "undefined" &&
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
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
