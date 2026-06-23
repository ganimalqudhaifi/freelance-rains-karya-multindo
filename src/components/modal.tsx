"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Modal({
  children,
  onClose,
  "aria-label": ariaLabel = "Dialog",
}: {
  children: React.ReactNode;
  onClose: () => void;
  "aria-label"?: string;
}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousActive = useRef<Element | null>(null);

  // Close on Escape.
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    // Save the active element so we can restore focus on close.
    previousActive.current = document.activeElement;

    document.addEventListener("keydown", handleKeyDown);

    // Move focus into the dialog on the next frame (after mount).
    requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore focus to the trigger element.
      if (previousActive.current instanceof HTMLElement) {
        previousActive.current.focus();
      }
    };
  }, [handleKeyDown]);

  // Simple focus trap: Tab cycles within the dialog.
  const handleTabTrap = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    []
  );

  return (
    <div
      onClick={(e) => {
        // Only close when clicking the backdrop itself, not its children.
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-900/70 p-4 backdrop-blur-sm animate-fade-in"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleTabTrap}
        className="relative mx-auto max-w-4xl animate-pop rounded-2xl bg-white p-2.5 shadow-card outline-none md:p-3"
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute -right-3 -top-3 flex size-10 items-center justify-center rounded-full bg-white text-primary-800 shadow-card transition-colors hover:bg-primary-50"
        >
          <X className="size-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
