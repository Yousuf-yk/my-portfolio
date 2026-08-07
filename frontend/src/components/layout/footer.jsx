import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)]">
      <div className="mx-auto max-w-6xl px-6 py-6">
        {/* Top row */}
        <div className="flex items-center justify-between">
          {/* Left */}
          <div>
            <p className="text-lg font-semibold text-[var(--text-main)]">
              Yousuf Khan
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              Full Stack Developer
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/_yousuf.yk_?igsh=azl6ZWZpd3RpNzcx"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-secondary)] transition duration-300 hover:-translate-y-0.5 hover:text-emerald-600"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://x.com/yousufKhan_20"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-secondary)] transition duration-300 hover:-translate-y-0.5 hover:text-emerald-600"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom center */}
        <div className="mt-5 border-t border-[var(--border-color)] pt-4 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            © {year} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;