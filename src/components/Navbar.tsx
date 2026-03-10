"use client";

import Link from "next/link";
import * as React from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="h-[72px] border-b border-white/[0.04] bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
        <div className="mx-auto flex h-full w-full max-w-[1120px] items-center justify-between px-6">
          <Link
            href="/#top"
            scroll
            aria-label="Go to top"
            className="flex items-center gap-2 rounded-[10px] outline-none transition-colors hover:bg-white/[0.03] focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50"
          >
            <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full border border-white/[0.10] bg-black/30 text-[12px] font-semibold text-[color:var(--accent)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[14px] w-[14px]"
                fill="none"
              >
                <path
                  d="M12 2L19 6V12C19 16.75 16.25 20.5 12 22C7.75 20.5 5 16.75 5 12V6L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7V16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <path
                  d="M9.5 10.5H14.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-[13px] font-semibold tracking-wide text-[color:var(--accent)]">
              AK
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 text-[13px] text-white/60 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll
                className="transition-colors hover:text-white/85"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-[10px] border border-white/[0.10] bg-black/30 p-2 text-white/80 outline-none transition-colors hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/50 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="border-b border-white/[0.06] bg-background/95 md:hidden">
          <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-1 px-6 py-3 text-[13px] text-white/70">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll
                onClick={closeMenu}
                className="flex items-center justify-end py-1.5 text-right transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

