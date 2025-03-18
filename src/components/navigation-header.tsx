"use client";

import Link from "next/link";
import { useState } from "react";
import CustomImage from "./custom-image";

const navigationLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Profile", href: "/profile" },
  { name: "Contact", href: "/#contact" },
];

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative border-b border-neutral-400 md:border-0">
      <div className="flex items-center justify-between mx-auto p-4 md:p-8 lg:px-16">
        <div>
          <CustomImage
            src="/logo.png"
            alt="logo"
            width={1460}
            height={560}
            className="w-24 md:w-[120px] shrink-0"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`${
            isOpen
              ? "absolute left-0 top-full w-full bg-white shadow-lg transition-opacity duration-300 ease-in-out opacity-100"
              : "hidden opacity-0"
          } md:block md:w-auto md:relative md:opacity-100 md:shadow-none`}
        >
          <ul className="font-medium md:text-lg flex flex-col p-4 md:p-0 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-white">
            {navigationLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
