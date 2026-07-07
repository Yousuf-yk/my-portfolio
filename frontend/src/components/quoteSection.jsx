import { useMemo } from "react";
import quotes from "../data/quotes";

function QuoteSection() {
  const quote = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }, []);

  return (
    <section className="quote-section">
      <h2>Quote of the Visit</h2>

      <blockquote>
        "{quote.text}"
      </blockquote>

      <p>- {quote.author}</p>
    </section>
  );
}

export default QuoteSection;