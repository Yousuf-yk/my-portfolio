import React, { useState } from 'react';
import { API_URL } from '../../api';
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi';
import GlowButton from '../layout/button';

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('number'),
      message: formData.get('text'),
    };

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message || 'Message sent successfully!');
      e.target.reset();
    } catch (error) {
      alert('Unable to send message right now. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-[var(--text-main)] md:text-5xl">
            Let's work together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            Have an idea, project, or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[340px_1fr]">
          {/* Contact info */}
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)]">
            <h3 className="mb-8 text-2xl font-semibold text-[var(--text-main)]">
              Contact information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                  <HiMail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-secondary)]">
                    Email
                  </p>
                  <a
                    href="mailto:yk0574292@gmail.com"
                    className="mt-1 block text-[var(--text-main)] transition-colors hover:text-emerald-600"
                  >
                    yk0574292@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                  <HiPhone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-secondary)]">
                    Phone
                  </p>
                  <p className="mt-1 text-[var(--text-main)]">
                    +91 **********
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                  <HiLocationMarker size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-secondary)]">
                    Location
                  </p>
                  <p className="mt-1 text-[var(--text-main)]">
                    Bangalore, India
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
                  Availability
                </p>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open to internship opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-main)]">
                    Your name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="enter your name"
                    required
                    className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-[var(--text-main)] outline-none transition-all duration-300 placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-main)]">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="alex@example.com"
                    required
                    className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-[var(--text-main)] outline-none transition-all duration-300 placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-main)]">
                  Phone number
                </label>

                <input
                  type="tel"
                  name="number"
                  placeholder="+91 69696 96969"
                  className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-[var(--text-main)] outline-none transition-all duration-300 placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-main)]">
                  Project details
                </label>

                <textarea
                  name="text"
                  placeholder="Tell me about your project, timeline, and requirements..."
                  required
                  rows={6}
                  className="w-full resize-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-[var(--text-main)] outline-none transition-all duration-300 placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
                />
              </div>

              <GlowButton
  type="submit"
  disabled={submitting}
  className="group bg-emerald-600 px-4 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
>
  <span className="inline-flex items-center gap-2">
    {submitting ? 'Sending...' : 'Send message'}
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