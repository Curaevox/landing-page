"use client";

import Link from "next/link";
import { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  showArrow?: boolean;
  size?: "sm" | "lg";
  onClick?: () => void;
};

function ArrowIcon() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-[7px] border border-white/20">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function PrimaryButton({
  children,
  href,
  className = "",
  showArrow = false,
  size = "sm",
  onClick,
}: PrimaryButtonProps) {
  const sizeClasses = size === "lg" ? "px-[21px] py-[14px] text-[14px]" : "px-[21px] py-[14px] text-[14px]";
  const classes = `inline-flex items-center justify-center gap-2 rounded-[14px] bg-forest-ink font-sans font-normal leading-[1.5] tracking-[-0.42px] text-linen-white transition-opacity hover:opacity-90 ${sizeClasses} ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
        {showArrow && <ArrowIcon />}
      </button>
    );
  }

  const isInternal = href?.startsWith("/");

  if (isInternal && href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowIcon />}
      </Link>
    );
  }

  return (
    <a href={href ?? "#"} className={classes}>
      {children}
      {showArrow && <ArrowIcon />}
    </a>
  );
}
