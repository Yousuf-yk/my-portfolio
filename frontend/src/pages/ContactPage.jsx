import React, { useState } from 'react';
// import { VITE_API_URL } from '../api';
import { API_URL } from '../api';
import GlowButton from '../components/layout/button';

function ContactPage() {
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
    <section className="container mx-auto px-4 py-12 md:py-20 max-w-7xl ">
      {/* Hero */}
      <div className="mb-16 text-center">
        <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-emerald-600">
          Contact
        </span>
        <h1 className="text-5xl font-bold text-[var(--text-main)] md:text-6xl">
          Let's build something meaningful
        </h1>
        <p className="mx-auto mt-6 text-left max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
          Whether you're looking for a full-stack developer, discussing a
          product idea, or exploring internship opportunities, I'm always
          interested in working on projects that solve real problems and create
          measurable impact.
        </p>
      </div>

      {/* Main content */}
      <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
        {/* Left panel */}
        <div className="space-y-8">
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-[var(--text-main)]">
              Contact information
            </h2>

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
                <p className="mt-1 text-[var(--text-main)]">+91 **********</p>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--text-secondary)]">
                  Location
                </p>
                <p className="mt-1 text-[var(--text-main)]">
                  Bangalore, Karnataka, India
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--text-secondary)]">
                  Response time
                </p>
                <p className="mt-1 text-[var(--text-main)]">
                  Usually within 24 hours
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to internships and freelance opportunities
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-[var(--text-main)]">
              What I can help with
            </h3>

            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li>• Full-stack web applications</li>
              <li>• React frontend development</li>
              <li>• Node.js & Express backend APIs</li>
              <li>• PostgreSQL database design</li>
              <li>• Portfolio and business websites</li>
              <li>• Performance and UI improvements</li>
            </ul>
          </div>
        </div>

        {/* Right panel */}
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[var(--text-main)]">
              Start a conversation
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              Share your idea, project requirements, timeline, or simply say
              hello. The more context you provide, the more helpful my response
              can be.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-main)]">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
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
                  placeholder="you@example.com"
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
                placeholder="Tell me about your project, goals, timeline, budget range, and any specific technologies you're considering."
                required
                rows={8}
                className="w-full resize-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
              />
            </div>

            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] p-5">
              <h3 className="font-semibold text-[var(--text-main)]">
                Before you send
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                If this is a project inquiry, include your timeline, expected
                deliverables, and whether you need frontend, backend, or
                full-stack development. That helps me provide a more accurate
                response.
              </p>
            </div>

            <GlowButton
              type="submit"
              disabled={submitting}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50">
  {submitting ? 'Sending message...' : 'Send message'}
</GlowButton>
{/* <GlowButton className="!bg-emerald-600 hover:!bg-emerald-700">download resume</GlowButton> */}


          </form>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mt-24">
        <h2 className="mb-10 text-center text-3xl font-bold text-[var(--text-main)]">
          Frequently asked questions
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
            <h3 className="font-semibold text-[var(--text-main)]">
              Are you available for internships?
            </h3>
            <p className="mt-3 text-[var(--text-secondary)]">
              Yes. I'm actively looking for software engineering and
              full-stack development internship opportunities.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
            <h3 className="font-semibold text-[var(--text-main)]">
              What technologies do you work with?
            </h3>
            <p className="mt-3 text-[var(--text-secondary)]">
              My primary stack includes React, Node.js, Express, PostgreSQL,
              JavaScript, and modern frontend development tools.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
            <h3 className="font-semibold text-[var(--text-main)]">
              How quickly do you respond?
            </h3>
            <p className="mt-3 text-[var(--text-secondary)]">
              I usually reply within 24 hours, often sooner for internship and
              collaboration inquiries.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
            <h3 className="font-semibold text-[var(--text-main)]">
              Do you build complete applications?
            </h3>
            <p className="mt-3 text-[var(--text-secondary)]">
              Yes. I can build responsive frontend interfaces, backend APIs,
              database integration, authentication, and deployment-ready
              full-stack applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;