
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FolderOpen,
  BookOpen,
  ScrollText,
  CircleUserRound,
} from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

function Header() {
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      to: "/",
      icon: Home,
    },
    {
      label: "Projects",
      to: "/projects",
      icon: FolderOpen,
    },
    // {
    //   label: "Blog",
    //   to: "/#blog",
    //   icon: BookOpen,
    //   hash: true,
    // },
    {
      label: "Certificates",
      to: "/about",
      icon: ScrollText,
      hash: true,
    },
    {
      label: "Contact",
      to: "/contact",
      icon: CircleUserRound,
    },
  ];

  const isActive = (item) => {
    if (item.hash) {
      return (
        location.pathname === "/" &&
        location.hash === item.to.substring(1)
      );
    }

    return location.pathname === item.to;
  };

  const buttonStyle =
    "group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-color)]/70 bg-[var(--bg-card)]/70 text-[var(--text-secondary)] shadow-[0_2px_5px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--text-main)] hover:shadow-md active:scale-95 sm:h-[52px] sm:w-[52px]";

  return (
    <header className="fixed inset-x-0 bottom-0 z-[9999] flex justify-center px-3 pb-[calc(12px+env(safe-area-inset-bottom))]">
      <nav
        aria-label="Main navigation"
        className="flex max-w-full items-center gap-1.5 rounded-full border border-[var(--border-color)]/80 bg-[var(--bg-main)]/85 p-2 shadow-[0_4px_18px_rgba(0,0,0,0.07)] backdrop-blur-2xl sm:gap-2 sm:p-2.5"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item);

          return (
            <Link
              key={item.label}
              to={item.to}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              title={item.label}
              className={`${buttonStyle} ${
                active
                  ? "border-[var(--text-secondary)]/30 text-[var(--text-main)]"
                  : ""
              }`}
            >
              <Icon
                size={22}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:scale-105 sm:h-6 sm:w-6"
              />

              {active && (
                <span className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-[var(--text-main)]" />
              )}
            </Link>
          );
        })}

        <span
          aria-hidden="true"
          className="mx-1 h-8 w-px shrink-0 bg-[var(--border-color)] sm:mx-2 sm:h-10"
        />

        <AnimatedThemeToggler
          variant="circle"
          fromCenter
          duration={400}
          aria-label="Toggle light and dark theme"
          className={`${buttonStyle} hover:rotate-[-8deg]`}
        />
      </nav>
    </header>
  );
}

export default Header;
