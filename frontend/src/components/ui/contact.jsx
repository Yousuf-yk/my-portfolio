
import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--bg-main)] px-6 py-20 text-[var(--text-main)] sm:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--text-secondary)]" />
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--text-secondary)]">
            Have something in mind?
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <Link
            to="/contact"
            className="group inline-flex w-fit items-start gap-3"
          >
            <h2 className="text-6xl font-medium leading-[0.95] tracking-[-0.07em] transition-opacity duration-300 group-hover:opacity-60 sm:text-7xl lg:text-8xl">
              Let's
              <br />
              connect.
            </h2>

            <span className="mt-1 text-3xl text-[var(--text-secondary)] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 sm:text-4xl">
              ↗
            </span>
          </Link>

          <div className="max-w-sm md:justify-self-end">
            <p className="text-base font-light leading-8 text-[var(--text-secondary)] sm:text-lg">
              Turning ideas into digital experiences, building useful things,
              and always looking for the next interesting challenge.
            </p>

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
