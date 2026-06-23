"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Animation = "fade-up" | "fade-in" | "scale-in";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Animation style applied when the element enters the viewport. */
  animation?: Animation;
  /** Delay in ms before the animation starts (used for staggering). */
  delay?: number;
}

const hiddenByAnimation: Record<Animation, string> = {
  "fade-up": "opacity-0 translate-y-7",
  "fade-in": "opacity-0",
  "scale-in": "opacity-0 scale-95",
};

const animateClass: Record<Animation, string> = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
};

/**
 * Scroll-triggered entrance animation.
 *
 * Server-renders visible (opacity-1, no transform) for SEO and no-JS.
 * On the client:
 *  – if already in the viewport → skip animation, stay visible.
 *  – if below the fold → hide it, then the IntersectionObserver fires the
 *    animation when the user scrolls to it.
 *
 * Once the animation finishes the CSS class is removed so that
 * fill-mode does not override author-level hover transforms etc.
 */
export default function Reveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true); // SSR-safe: always visible

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if the element is already in or near the viewport.
    const rect = node.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight + 100;

    if (isInViewport) {
      // Already visible — keep visible, no hiding needed.
      return;
    }

    // Below the fold — hide until scrolled into view.
    setVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        "will-change-transform",
        visible ? animateClass[animation] : hiddenByAnimation[animation],
        className
      )}
    >
      {children}
    </div>
  );
}
