"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LogoLink } from "./Logo";
import { PrimaryButton } from "./ui/PrimaryButton";
import { useDemo } from "./DemoProvider";
import {
  mainNav,
  productsDropdown,
  solutionsDropdown,
  resourcesDropdown,
  type NavDropdown,
} from "@/lib/navigation";

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropdownPanel({ dropdown }: { dropdown: NavDropdown }) {
  return (
    <div className="absolute left-1/2 top-full z-50 mt-2 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 rounded-[14px] border border-hairline-gray bg-linen-white p-[21px] shadow-none">
      <div className="grid gap-[21px] sm:grid-cols-3">
        {dropdown.columns.map((col) => (
          <div key={col.title}>
            <Link
              href={col.href}
              className="block text-[14px] font-normal tracking-[-0.42px] text-forest-ink hover:opacity-70"
            >
              {col.title}
            </Link>
            <div className="mt-[9px] space-y-[7px]">
              {col.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="block text-[14px] font-normal tracking-[-0.42px] text-graphite hover:text-forest-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavDropdownItem({ dropdown }: { dropdown: NavDropdown }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 rounded-[7px] px-[11px] py-2 text-[14px] font-normal tracking-[-0.42px] text-charcoal transition-colors hover:text-forest-ink"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {dropdown.label}
        <ChevronDown open={open} />
      </button>
      {open && <DropdownPanel dropdown={dropdown} />}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { openDemo } = useDemo();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-8">
        <LogoLink href="/" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <Link
            href={mainNav[0].href}
            className="rounded-[8px] px-[11px] py-2 text-[14px] font-normal tracking-[-0.01em] text-muted transition-colors hover:text-ink"
          >
            {mainNav[0].label}
          </Link>
          <NavDropdownItem dropdown={productsDropdown} />
          <NavDropdownItem dropdown={solutionsDropdown} />
          <Link
            href={mainNav[1].href}
            className="rounded-[8px] px-[11px] py-2 text-[14px] font-normal tracking-[-0.01em] text-muted transition-colors hover:text-ink"
          >
            {mainNav[1].label}
          </Link>
          <NavDropdownItem dropdown={resourcesDropdown} />
        </nav>

        <div className="hidden lg:block">
          <PrimaryButton onClick={openDemo}>Book a demo</PrimaryButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-[7px] text-charcoal lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-hairline-gray px-6 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-2">
            {mainNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-[7px] px-3 py-2 text-[14px] text-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {[productsDropdown, solutionsDropdown, resourcesDropdown].map((dropdown) => (
              <div key={dropdown.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-[7px] px-3 py-2 text-[14px] text-charcoal"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === dropdown.label ? null : dropdown.label)
                  }
                >
                  {dropdown.label}
                  <ChevronDown open={mobileDropdown === dropdown.label} />
                </button>
                {mobileDropdown === dropdown.label && (
                  <div className="ml-3 space-y-3 border-l border-hairline-gray py-2 pl-3">
                    {dropdown.columns.map((col) => (
                      <div key={col.title}>
                        <Link
                          href={col.href}
                          className="block text-[14px] text-forest-ink"
                          onClick={() => setMobileOpen(false)}
                        >
                          {col.title}
                        </Link>
                        {col.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="mt-1 block text-[13px] text-graphite"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <PrimaryButton onClick={openDemo} className="mt-2 w-full justify-center">
              Book a demo
            </PrimaryButton>
          </div>
        </nav>
      )}
    </header>
  );
}
