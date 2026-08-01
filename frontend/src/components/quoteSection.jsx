import React, { useMemo } from 'react';
import quotes from '../data/quotes';

function QuoteSection() {
  const quote = useMemo(() => {
    if (!quotes || quotes.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }, []);

  if (!quote) return null;

  return (
    <section className='mx-auto max-w-4xl px-6 py-20'>
      <div className='rounded-3xl border border-gray-200 bg-white p-10 shadow-sm'>
        <p className='mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-600'>
          Quote of the visit
        </p>

        <blockquote className='text-2xl font-medium leading-relaxed text-gray-900 md:text-3xl'>
          “{quote.text}”
        </blockquote>

        <div className='mt-6 h-px w-16 bg-emerald-500'></div>

        <p className='mt-4 text-base font-semibold text-gray-700'>
          {quote.author}
        </p>
      </div>
    </section>
  );
}

export default QuoteSection;