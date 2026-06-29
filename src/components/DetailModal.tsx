"use client";

import { useEffect } from "react";

export function DetailModal({
  open,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  children,
}: {
  open: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev && onPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {hasPrev && onPrev && (
        <button
          type="button"
          aria-label="Previous item"
          onClick={onPrev}
          className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card text-card-foreground shadow-md transition-colors hover:bg-muted md:left-6"
        >
          ‹
        </button>
      )}

      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-card p-6 card-shadow md:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          ✕
        </button>
        {children}
      </div>

      {hasNext && onNext && (
        <button
          type="button"
          aria-label="Next item"
          onClick={onNext}
          className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card text-card-foreground shadow-md transition-colors hover:bg-muted md:right-6"
        >
          ›
        </button>
      )}
    </div>
  );
}
