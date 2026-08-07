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
    <section className="mx-auto max-w-4xl px-5 py-10 sm:px-6 sm:py-14">
      <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 shadow-sm sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 sm:text-sm">
          Quote of the visit
        </p>

        <blockquote className="text-lg font-medium leading-7 text-[var(--text-main)] sm:text-xl md:text-2xl">
          “{quote.text}”
        </blockquote>

        <div className="mt-4 h-px w-12 bg-emerald-500" />

        <p className="mt-3 text-sm font-semibold text-[var(--text-secondary)] sm:text-base">
          {quote.author}
        </p>
      </div>
    </section>
  );
}

export default QuoteSection;