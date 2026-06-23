"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  // Close on Escape for accessibility.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-900/70 p-4 backdrop-blur-sm animate-fade-in"
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto max-w-4xl animate-pop rounded-2xl bg-white p-2.5 shadow-card md:p-3"
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
