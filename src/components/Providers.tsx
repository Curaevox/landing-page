"use client";

import { ReactNode } from "react";
import { LenisProvider } from "@/components/animations/LenisProvider";
import { DemoProvider } from "@/components/DemoProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <DemoProvider>{children}</DemoProvider>
    </LenisProvider>
  );
}
