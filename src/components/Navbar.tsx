"use client";

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

  return (
    <nav className="sticky top-0 z-10 backdrop-blur bg-black/60 border-b border-gray-800">
      <div className="container mx-auto max-w-screen-lg px-4">
        <ul className="flex gap-6 items-center justify-center py-4 font-mono text-sm">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`${isActive ? "text-cyan-400 font-semibold" : "text-white"} hover:text-cyan-400 transition-colors duration-200`}
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
