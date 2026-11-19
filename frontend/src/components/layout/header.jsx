
import React from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  FolderKanban,
  UserRound,
  Mail,
} from "lucide-react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

function Header() {
  const navItems = [
    { name: "Home", path: "/", icon: House, end: true },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "About", path: "/about", icon: UserRound },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header
      className="
        fixed inset-x-0 bottom-0 z-[9999]
        flex justify-center
        px-4 pb-[max(16px,env(safe-area-inset-bottom))]
        pointer-events-none
      "
    >
      <nav
        aria-label="Main navigation"
        className="
          pointer-events-auto
          flex w-fit max-w-full items-center justify-center
          gap-1 sm:gap-2
          rounded-full
          border border-[var(--border-color)]/70
          bg-[var(--bg-card)]/80
          p-1.5
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          backdrop-blur-2xl
          transition-all duration-300
        "
      >
        {navItems.map(({ name, path, icon: Icon, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            aria-label={name}
            title={name}
            className={({ isActive }) =>
              `
                flex h-11 w-11 sm:h-12 sm:w-12
                shrink-0 items-center justify-center
                rounded-full
                transition-all duration-300 ease-out
                ${
                  isActive
                    ? "bg-[var(--bg-main)] text-[var(--text-main)] shadow-sm ring-1 ring-[var(--border-color)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-main)]/70 hover:text-[var(--text-main)]"
                }
              `
            }
          >
            <Icon
              size={21}
              strokeWidth={1.8}
              className="transition-transform duration-300"
            />
          </NavLink>
        ))}

        <div className="mx-1 h-7 w-px shrink-0 bg-[var(--border-color)]" />

        <AnimatedThemeToggler
          variant="circle"
          fromCenter
          duration={400}
          className="
            flex h-11 w-11 sm:h-12 sm:w-12
            shrink-0 items-center justify-center
            rounded-full
            text-[var(--text-main)]
            transition-all duration-300
            hover:bg-[var(--bg-main)]
            active:scale-95
          "
          aria-label="Toggle theme"
        />
      </nav>
    </header>
  );
}

export default Header;
