import React, { useState } from "react";
import { API_URL } from "../../api";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowRight,
} from "react-icons/hi";
import GlowButton from "../layout/button";

function Contact() {
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

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-100px] h-72 w-72 rounded-full bg-emerald-500/[0.05] blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-72 w-72 rounded-full bg-emerald-500/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-main)] sm:text-4xl">
            Let's work together
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
            Have a project, internship opportunity, or just want to connect?
            Send me a message.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact details */}
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm sm:p-7">
            <h3 className="text-xl font-semibold text-[var(--text-main)]">
              Get in touch
            </h3>

            <div className="mt-6 space-y-4">
              {/* Email */}
              <a
                href="mailto:yk0574292@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/60"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <HiMail size={19} />
                </span>

                <div className="min-w-0">
                  <p className="text-xs text-[var(--text-secondary)]">
                    Email
                  </p>

                  <p className="truncate text-sm font-medium text-[var(--text-main)] group-hover:text-emerald-600">
                    yk0574292@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <HiPhone size={19} />
                </span>

                <div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Phone
                  </p>

                  <p className="text-sm font-medium text-[var(--text-main)]">
                    +91 **********
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <HiLocationMarker size={19} />
                </span>

                <div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Location
                  </p>

                  <p className="text-sm font-medium text-[var(--text-main)]">
                    Bangalore, India
                  </p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mt-5 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Open to internship opportunities
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm sm:p-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <input
                type="tel"
                name="number"
                placeholder="Phone number (optional)"
                className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              />

              <textarea
                name="text"
                rows={5}
                required
                placeholder="Tell me what you'd like to discuss..."
                className="w-full resize-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              />

              <GlowButton
                type="submit"
                disabled={submitting}
                className="group !bg-emerald-600 px-5 hover:!bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="inline-flex items-center gap-2">
                  {submitting ? "Sending..." : "Send message"}

                  {!submitting && (
                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </span>
              </GlowButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;