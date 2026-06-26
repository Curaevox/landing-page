"use client";

import { useEffect } from "react";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DemoModal({ open, onClose }: DemoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <button
        type="button"
        className="absolute inset-0 bg-true-black/40 backdrop-blur-sm"
        aria-label="Close demo form"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="relative w-full max-w-lg rounded-[14px] bg-linen-white p-[35px] shadow-none"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-[7px] text-charcoal hover:bg-linen"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <h2 id="demo-modal-title" className="font-display text-[28px] font-semibold tracking-[-0.02em] text-ink">
          Book a demo
        </h2>
        <p className="mt-2 text-[14px] text-muted">
          See how Curaevox answers every patient call, books the right doctor, and follows up after
          every visit, live on your numbers.
        </p>
        <form
          className="mt-[28px] space-y-[14px]"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <label className="block">
            <span className="mb-1 block text-[12px] text-graphite">Full name</span>
            <input
              required
              type="text"
              className="w-full rounded-[7px] border border-hairline-gray bg-linen-white px-3 py-2 text-[14px] outline-none focus:border-forest-ink"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-[12px] text-graphite">Work email</span>
            <input
              required
              type="email"
              className="w-full rounded-[7px] border border-hairline-gray bg-linen-white px-3 py-2 text-[14px] outline-none focus:border-forest-ink"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-[12px] text-graphite">Organization</span>
            <input
              required
              type="text"
              className="w-full rounded-[7px] border border-hairline-gray bg-linen-white px-3 py-2 text-[14px] outline-none focus:border-forest-ink"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-[14px] bg-forest-ink px-[21px] py-[14px] text-[14px] font-normal tracking-[-0.42px] text-linen-white transition-opacity hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
