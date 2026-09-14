import { useState } from "react";
import logo from "../assets/logo-text.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between md:grid md:grid-cols-3">
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 shrink-0"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#14162b"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <a
            href="#home"
            className="transform translate-x-14 sm:translate-x-16 md:translate-x-0"
          >
            <img
              src={logo}
              alt="Dev Stack logo"
              className="h-6 md:h-7 w-auto object-contain"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              className={
                index === 0
                  ? "text-sm font-semibold text-pink-500"
                  : "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3 shrink-0">
          <button className="text-xs sm:text-sm font-medium text-gray-700 hover:text-pink-500 px-1 whitespace-nowrap transition-colors">
            Sign In
          </button>
          <button className="btn-gradient text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4 bg-white border-b border-gray-100 shadow-lg">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              className={
                index === 0
                  ? "py-2 text-sm font-semibold text-pink-500"
                  : "py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
