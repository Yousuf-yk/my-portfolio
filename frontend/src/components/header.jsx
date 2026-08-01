import React, { useState, useContext, useEffect } from 'react';
import yousufImg from '../assets/photos/yousufimg.jpeg';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, triggerPageBlur } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);

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

  const glassButton = `
    flex h-10 w-10 items-center justify-center
    border border-gray-200/70
    bg-white/40
    backdrop-blur-md
    transition-all duration-300
    hover:bg-white/70
    hover:border-gray-300
  `;

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <nav
          className={`
            mt-4 flex items-center justify-between
            border transition-all duration-300

            ${
            scrolled
              ? `
                  rounded-4xl
                  border-gray-200
                  bg-white/65
                  px-5 py-2
                  shadow-lg
                  backdrop-blur-xl
                `
              : `
                  rounded-none
                  border-transparent
                  bg-white/30
                  px-5 py-4
                  backdrop-blur-md
                `
            }
          `}
        >

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3"
          >
            <img
              src={yousufImg}
              alt="Yousuf Khan"
              className={`rounded-full object-cover ring-1 ring-gray-200 transition-all duration-300
                ${scrolled
                  ? "h-9 w-9"
                  : "h-[45px] w-[45px]"
                }
  `}
            />

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">
                Yousuf Khan
              </p>

              <p className="text-xs text-gray-500">
                Full Stack Developer
              </p>
            </div>
          </a>


          {/* Desktop Navigation */}
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
                  className="
                    text-sm font-medium
                    text-gray-600
                    transition-colors
                    duration-200
                    hover:text-gray-900
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>


          {/* Right Actions */}
          <div className="flex items-center gap-3">

            {/* Theme Button */}
            <div
              className={`
                ${glassButton}
                ${scrolled ? 'rounded-2xl' : 'rounded-lg'}
              `}
            >
              <DarkModeSwitch
                checked={theme === 'warm'}
                onClick={(e) => setClickEvent(e)}
                onChange={() => toggleTheme(clickEvent)}
                size={20}
                sunColor="#f59e0b"
                moonColor="#64748b"
              />
            </div>


            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`
                ${glassButton}
                ${scrolled ? 'rounded-2xl' : 'rounded-lg'}
                md:hidden
              `}
              aria-label="Toggle navigation menu"
            >

              <svg
                className="h-5 w-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >

                {menuOpen ? (
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

          </div>

        </nav>


        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              mt-3 rounded-2xl
              border border-gray-200
              bg-white/70
              p-4
              shadow-lg
              backdrop-blur-xl
              md:hidden
            "
          >

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
                  className="
                    rounded-xl
                    px-3 py-2
                    text-sm font-medium
                    text-gray-700
                    transition
                    hover:bg-white/60
                    hover:text-gray-900
                  "
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