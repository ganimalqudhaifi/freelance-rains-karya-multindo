"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import CustomImage from "./custom-image";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { name: "Beranda", href: "/#home" },
  { name: "Tentang", href: "/#about" },
  { name: "Layanan", href: "/#services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Profil", href: "/profile" },
];

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  // Also release the lock when the viewport resizes above the md breakpoint
  // (where the mobile menu is hidden).
  useEffect(() => {
    const updateLock = () => {
      const isDesktop = window.innerWidth >= 768;
      document.body.style.overflow =
        isOpen && !isDesktop ? "hidden" : "";
    };
    updateLock();
    window.addEventListener("resize", updateLock);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", updateLock);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={cn(
          "mx-auto flex items-center justify-between px-4 transition-all duration-300 md:px-8 lg:px-16",
          scrolled
            ? "border-b border-neutral-400/80 bg-white/85 py-3 shadow-soft backdrop-blur-xl"
            : "border-b border-transparent bg-white/0 py-4 md:py-6"
        )}
      >
        <Link href="/#home" className="shrink-0" aria-label="Rains Karya Multindo — beranda">
          <CustomImage
            src="/logo.png"
            alt="Logo Rains Karya Multindo"
            width={1460}
            height={560}
            priority
            className="w-24 transition-all duration-300 md:w-[120px]"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="link-underline py-1 text-[15px] font-medium text-primary-800 transition-colors hover:text-primary-900"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="group hidden items-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-primary-900 hover:shadow-card md:inline-flex"
        >
          Hubungi Kami
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-xl text-primary-800 transition-colors hover:bg-neutral-400/60 md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-x-0 top-[4.5rem] z-40 origin-top px-4 transition-all duration-300 md:hidden",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-neutral-400 bg-white shadow-card">
          <ul className="flex flex-col p-2">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-primary-800 transition-colors hover:bg-primary-50 hover:text-primary-900"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="p-2">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-900"
              >
                Hubungi Kami
                <ArrowUpRight className="size-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
