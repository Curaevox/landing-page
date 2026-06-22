import Link from "next/link";
import { LogoLink } from "./Logo";
import { footerLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-forest-ink text-linen-white">
      <div className="mx-auto max-w-[1200px] px-6 py-[70px] lg:px-8">
        <div className="grid gap-[49px] sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <LogoLink href="/" light />
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="mb-[14px] text-[12px] font-normal tracking-[-0.36px] text-linen-white/60">
                {category}
              </p>
              <ul className="space-y-[9px]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] font-normal tracking-[-0.42px] text-linen-white/90 transition-opacity hover:opacity-70"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mb-[14px] text-[12px] font-normal tracking-[-0.36px] text-linen-white/60">
              Contact
            </p>
            <a
              href="mailto:hello@curaevox.com"
              className="text-[14px] font-normal tracking-[-0.42px] text-linen-white/90 transition-opacity hover:opacity-70"
            >
              hello@curaevox.com
            </a>
          </div>
        </div>

        <div className="mt-[49px] flex flex-col items-start justify-between gap-4 border-t border-linen-white/10 pt-[28px] sm:flex-row sm:items-center">
          <p className="text-[12px] tracking-[-0.36px] text-linen-white/60">
            © 2026 Curaevox. All rights reserved.
          </p>
          <div className="flex gap-[21px]">
            <Link href="/privacy" className="text-[12px] tracking-[-0.36px] text-linen-white/60 hover:opacity-70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[12px] tracking-[-0.36px] text-linen-white/60 hover:opacity-70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
