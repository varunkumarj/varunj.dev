"use client";

import { useEffect, useState, useRef } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur transition-colors duration-300 ${
        scrolled ? "bg-gray-950/90 shadow-md" : "bg-gray-950/70"
      }`}
    >
      <div className="max-w-screen-lg mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-primary-500 font-bold text-lg tracking-wide">
          varunj.dev
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 md:gap-6 text-sm">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-2 py-1 rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-primary-500 font-semibold underline underline-offset-4"
                      : "text-gray-300 hover:text-primary-500 hover:bg-primary-700/10"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="flex flex-col p-4 gap-3">
          {navItems.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block px-4 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-primary-500/20 text-primary-500 font-semibold"
                      : "text-gray-300 hover:text-primary-500 hover:bg-primary-700/10"
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
