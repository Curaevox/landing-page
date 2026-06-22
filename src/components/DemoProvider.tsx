"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { DemoModal } from "./DemoModal";

type DemoContextValue = {
  openDemo: () => void;
  closeDemo: () => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <DemoContext.Provider value={{ openDemo: () => setOpen(true), closeDemo: () => setOpen(false) }}>
      {children}
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    return {
      openDemo: () => {},
      closeDemo: () => {},
    };
  }
  return ctx;
}
