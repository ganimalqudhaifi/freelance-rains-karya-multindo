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
  /** Render as a different element (e.g. "li", "section"). Defaults to div. */
  as?: "div" | "section" | "li" | "span";
  /** Only animate the first time it enters the viewport. */
  once?: boolean;
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

export default function Reveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  as = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced motion is honored globally via the prefers-reduced-motion CSS
    // rule (animation/transition durations collapse to ~0), so the observer
    // still toggles visibility but the reveal appears instantly.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        "will-change-transform",
        visible ? animateClass[animation] : hiddenByAnimation[animation],
        className
      )}
    >
      {children}
    </Tag>
  );
}
