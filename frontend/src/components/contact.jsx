import React, { useState } from 'react';
import { API_URL } from '../api';

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
      const response = await fetch(`${API_URL}contact`, {
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
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
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
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
          <h3 className="mb-8 text-2xl font-semibold text-[var(--text-main)]">
            Contact information
          </h3>

          <div className="space-y-6">
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

            <div>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Phone
              </p>
              <p className="mt-1 text-[var(--text-main)]">
                +91 **********
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Location
              </p>
              <p className="mt-1 text-[var(--text-main)]">
                Bangalore, India
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                Availability
              </p>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-800 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to internships opportunities
          </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-main)]">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="alex"
                  required
                  className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
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
                  className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
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
                className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
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
                className="w-full resize-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
            >
              {submitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;