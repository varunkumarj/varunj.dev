"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur transition-colors duration-300 ${
        scrolled ? "bg-black/90 shadow-md" : "bg-black/70"
      }`}
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-cyan-400 font-bold text-lg tracking-wide">
          varunj.dev
        </Link>
        <ul className="flex gap-4 md:gap-6 text-sm">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-2 py-1 rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-cyan-400 font-semibold underline underline-offset-4"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-700/10"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
