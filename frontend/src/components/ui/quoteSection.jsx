import React, { useMemo } from 'react';
import quotes from '../../data/quotes';

function QuoteSection() {
  const quote = useMemo(() => {
    if (!quotes || quotes.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }, []);

  if (!quote) return null;

  return (
    <section className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[var(--border-color)]
            bg-[var(--bg-card)]
            px-6
            py-7
            shadow-sm
            transition-all
            duration-300
            hover:border-emerald-300/60
            hover:shadow-[0_15px_40px_rgba(16,185,129,0.08)]
            sm:px-10
            sm:py-8
          "
        >
          {/* Subtle glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-emerald-500/15" />

          {/* Quote mark */}
          <div className="absolute right-5 top-2 select-none text-6xl font-serif leading-none text-emerald-500/10 sm:right-8 sm:text-7xl">
            ”
          </div>

          {/* Label */}
          <div className="relative">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600 sm:text-xs">
              Quote of the visit
            </p>

            {/* Quote */}
            <blockquote className="max-w-3xl text-base font-medium leading-7 text-[var(--text-main)] sm:text-lg sm:leading-8 md:text-xl">
              “{quote.text}”
            </blockquote>

            {/* Divider */}
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-500" />

              <span className="text-sm font-semibold text-[var(--text-secondary)]">
                {quote.author}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;