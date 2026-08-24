import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import yousufImg from "../../assets/photos/yousufimg2.jpeg";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const glassButton =
    "flex h-10 w-10 items-center justify-center border border-[var(--border-color)]/70 bg-[var(--bg-card)]/40 backdrop-blur-md transition-all duration-300 hover:bg-[var(--bg-card)]/70 hover:border-[var(--border-color)] active:scale-95";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "mt-3 rounded-4xl  border-[var(--border-color)] bg-[var(--bg-card)]/65 px-5 py-2 shadow-lg backdrop-blur-xl"
              : "rounded-none  border-transparent bg-[var(--bg-card)]/30 px-5 py-4 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={yousufImg}
              alt="Yousuf Khan"
              className={`rounded-full object-cover ring-1 ring-[var(--border-color)] transition-all duration-300 ${
                scrolled ? "h-9 w-9" : "h-[45px] w-[45px]"
              }`}
            />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-[var(--text-main)]">
                Yousuf Khan
              </p>

              <p className="text-xs text-[var(--text-secondary)]">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link
                to="/projects"
                className="text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-main)]"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-main)]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-main)]"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Magic UI Theme Toggle */}
            <AnimatedThemeToggler
              variant="circle"
              fromCenter
              duration={700}
              className={`${glassButton} ${scrolled ? "rounded-2xl" : "rounded-lg"
                } text-[var(--text-main)]`}
              aria-label="Toggle theme"
            />
            

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`${glassButton} ${
                scrolled ? "rounded-2xl" : "rounded-lg"
              } md:hidden`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-[var(--text-main)]" />
              ) : (
                <Menu className="h-5 w-5 text-[var(--text-main)]" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute right-[10px] mt-3 w-[40%] rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]/70 p-4 shadow-lg backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3 text-center">
              <Link
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text-main)] transition hover:bg-[var(--bg-card)]/60"
              >
                Projects
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text-main)] transition hover:bg-[var(--bg-card)]/60"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text-main)] transition hover:bg-[var(--bg-card)]/60"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;