import React, { useState, useContext, useEffect } from 'react';
import yousufImg from '../assets/photos/yousufimg.jpeg';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, triggerPageBlur } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);

    const scroll = () => {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (typeof triggerPageBlur === 'function') {
      triggerPageBlur(scroll);
    } else {
      scroll();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const glassButton =
    'flex h-10 w-10 items-center justify-center border border-[var(--border-color)]/70 bg-[var(--bg-card)]/40 backdrop-blur-md transition-all duration-300 hover:bg-[var(--bg-card)]/70 hover:border-[var(--border-color)] active:scale-95';

  const isDark = theme === 'warm';

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <nav
          className={` flex items-center justify-between border transition-all duration-300 ${
            scrolled
              ? 'mt-3 rounded-4xl border-[var(--border-color)] bg-[var(--bg-card)]/65 px-5 py-2 shadow-lg backdrop-blur-xl'
              : 'rounded-none border-transparent bg-[var(--bg-card)]/30 px-5 py-4 backdrop-blur-md'
          }`}
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3"
          >
            <img
              src={yousufImg}
              alt="Yousuf Khan"
              className={`rounded-full object-cover ring-1 ring-[var(--border-color)] transition-all duration-300 ${
                scrolled ? 'h-9 w-9' : 'h-[45px] w-[45px]'
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
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {[
              ['Home', '#home'],
              ['Projects', '#project'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-main)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`${glassButton} ${
                scrolled ? 'rounded-2xl' : 'rounded-lg'
              } relative overflow-hidden`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.2 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.25,
                    ease: 'easeOut',
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {isDark ? (
                    <Sun className="h-[18px] w-[18px] text-orange-500" />
                  ) : (
                    <Moon className="h-[18px] w-[18px] text-sky-500" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${glassButton} ${
                scrolled ? 'rounded-2xl' : 'rounded-lg'
              } md:hidden`}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-[var(--text-main)]" />
              ) : (
                <Menu className="h-5 w-5 text-[var(--text-main)]" />
              )}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="absolute mt-3 w-[50%] right-[10px] rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]/70 p-4 shadow-lg backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3">
              {[
                ['Home', '#home'],
                ['Projects', '#project'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--text-main)] transition hover:bg-[var(--bg-card)]/60 hover:text-[var(--text-main)]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;