import React, { useState } from "react";
import { API_URL } from "../api";
import GlowButton from "../components/layout/button";

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("number"),
      message: formData.get("text"),
    };

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      alert(result.message || "Message sent successfully!");
      e.target.reset();
    } catch (error) {
      alert("Unable to send message right now. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Are you available for internships?",
      answer:
        "Yes. I'm actively looking for software engineering and full-stack development internship opportunities.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "My primary stack includes React, Node.js, Express, PostgreSQL, JavaScript, and modern frontend development tools.",
    },
    {
      question: "How quickly do you respond?",
      answer:
        "I usually reply within 24 hours, often sooner for internship and collaboration inquiries.",
    },
    {
      question: "Can you build complete applications?",
      answer:
        "Yes. I can work across responsive frontend interfaces, backend APIs, databases, authentication, and deployment.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[20%] top-[-200px] h-[420px] w-[420px] rounded-full bg-[var(--text-main)]/[0.035] blur-3xl" />

        <div className="absolute right-[-180px] top-[35%] h-[400px] w-[400px] rounded-full bg-[var(--text-main)]/[0.025] blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        {/* ───────────────── HERO ───────────────── */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Contact
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              Let's build something
              <span className="text-[var(--text-secondary)]">
                {" "}
                meaningful.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              Have a project idea, internship opportunity, or just want to
              talk tech? Send me a message and I'll get back to you.
            </p>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] px-5 py-4">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>

            <div>
              <p className="text-sm font-semibold">Available</p>
              <p className="text-xs text-[var(--text-secondary)]">
                Open to internships & opportunities
              </p>
            </div>
          </div>
        </div>

        {/* ───────────────── CONTACT GRID ───────────────── */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Left information panel */}
          <div className="space-y-6">
            {/* Contact details */}
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    Get in touch
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Contact information
                  </h2>
                </div>

                <span className="text-xs text-[var(--text-secondary)]">
                  01
                </span>
              </div>

              <div className="space-y-1">
                <a
                  href="mailto:yk0574292@gmail.com"
                  className="group block rounded-2xl border border-transparent p-4 transition hover:border-[var(--border-color)] hover:bg-[var(--bg-main)]"
                >
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium group-hover:text-emerald-600">
                    yk0574292@gmail.com
                  </p>
                </a>

                <div className="rounded-2xl border border-transparent p-4">
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    +91 **********
                  </p>
                </div>

                <div className="rounded-2xl border border-transparent p-4">
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    Bangalore, Karnataka
                  </p>
                </div>

                <div className="rounded-2xl border border-transparent p-4">
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                    Response time
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* What I can help with */}
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                What I do
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                What I can help with
              </h3>

              <div className="mt-6 grid gap-2">
                {[
                  "Full-stack web applications",
                  "React frontend development",
                  "Node.js & Express APIs",
                  "PostgreSQL database integration",
                  "Portfolio & business websites",
                  "UI and performance improvements",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3"
                  >
                    <span className="text-[10px] font-semibold text-[var(--text-secondary)]">
                      0{index + 1}
                    </span>

                    <span className="text-sm text-[var(--text-main)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ───────────────── FORM ───────────────── */}
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-7 sm:p-9">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  Send a message
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Start a conversation
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                  Tell me what you're working on, what you need, and where you
                  want to take it.
                </p>
              </div>

              <span className="hidden text-xs text-[var(--text-secondary)] sm:block">
                02
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone number
                  <span className="ml-2 text-xs font-normal text-[var(--text-secondary)]">
                    Optional
                  </span>
                </label>

                <input
                  type="tel"
                  name="number"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              {/* Message */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Project details
                  </label>

                  <span className="text-xs text-[var(--text-secondary)]">
                    Tell me everything useful
                  </span>
                </div>

                <textarea
                  name="text"
                  placeholder="Tell me about your project, goals, timeline, requirements, or opportunity..."
                  required
                  rows={7}
                  className="w-full resize-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm leading-6 text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              {/* Helpful note */}
              <div className="flex gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] p-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border-color)] text-xs">
                  i
                </div>

                <p className="text-xs leading-5 text-[var(--text-secondary)]">
                  For project inquiries, mentioning your timeline, expected
                  deliverables, and whether you need frontend, backend, or
                  full-stack work will help me give you a more useful response.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[var(--text-secondary)]">
                  I usually respond within 24 hours.
                </p>

                <GlowButton
                  type="submit"
                  disabled={submitting}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? "Sending message..." : "Send message"}
                </GlowButton>
              </div>
            </form>
          </div>
        </div>

        {/* ───────────────── FAQ ───────────────── */}
        <div className="mt-12">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                FAQ
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Common questions
              </h2>
            </div>

            <span className="hidden text-xs text-[var(--text-secondary)] sm:block">
              04 answers
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-5">
                  <h3 className="font-semibold leading-6">
                    {faq.question}
                  </h3>

                  <span className="shrink-0 text-xs text-[var(--text-secondary)]">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border-color)] pt-6 text-xs text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <span>Have an idea? Let's talk.</span>

          <a
            href="mailto:yk0574292@gmail.com"
            className="font-medium transition-colors hover:text-emerald-600"
          >
            yk0574292@gmail.com →
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;