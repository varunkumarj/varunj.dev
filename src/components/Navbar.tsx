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
    <nav className="sticky top-0 z-10 bg-black/80 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto max-w-4xl px-4">
        <ul className="flex items-center justify-between py-4 font-mono text-sm">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`${isActive ? "text-green-400" : "text-gray-300"} hover:text-green-400 transition-colors`}
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
