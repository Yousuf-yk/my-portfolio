
import React, { useMemo } from "react";
import quotes from "../../data/quotes";

function QuoteSection() {
  const quote = useMemo(() => {
    if (!quotes?.length) return null;

    return quotes[Math.floor(Math.random() * quotes.length)];
  }, []);

  if (!quote) return null;

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="md:ml-[180px]">
          <div className="relative">
            <blockquote className="max-w-4xl pr-14 text-xl font-medium leading-relaxed tracking-tight text-[var(--text-main)] sm:pr-20 sm:text-2xl sm:leading-relaxed lg:text-3xl">
              {quote.text}
            </blockquote>

            <span className="absolute -right-1 bottom-0 font-serif text-8xl leading-none text-[var(--text-secondary)] opacity-40 sm:text-9xl">
              ”
            </span>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-7 bg-[var(--text-secondary)]" />

            <p className="text-xs font-medium tracking-wide text-[var(--text-secondary)]">
              {quote.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
