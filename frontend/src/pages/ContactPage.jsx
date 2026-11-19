
import React, { useState } from "react";
import { API_URL } from "../api";
import GlowButton from "../components/layout/button";
import { HiArrowRight } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

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

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      alert(result.message || "Message sent successfully!");
      e.target.reset();
    } catch (error) {
      alert(error.message || "Unable to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const socials = [
    {
      name: "GitHub",
      handle: "Yousuf-yk",
      link: "https://github.com/Yousuf-yk",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      handle: "Your LinkedIn handle",
      link: "YOUR_LINKEDIN_URL",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      handle: "Your Instagram handle",
      link: "YOUR_INSTAGRAM_URL",
      icon: FaInstagram,
    },
    {
      name: "X",
      handle: "@yousufKhan_20",
      link: "https://x.com/yousufKhan_20",
      icon: FaXTwitter,
    },
  ];

  const inputStyle =
    "w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-main)] outline-none transition placeholder:text-[var(--text-secondary)] focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";

  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
            Get in touch
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact information
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Have a project idea, internship opportunity, or just want to talk
            tech? Feel free to reach out.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-7">
              <h2 className="mb-6 text-xl font-bold">
                Contact details
              </h2>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                    Email
                  </p>
                  <a
                    href="mailto:yk0574292@gmail.com"
                    className="mt-1 block text-sm font-medium hover:text-emerald-500"
                  >
                    yk0574292@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Bangalore, Karnataka
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                    Response time
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-7">
              <h2 className="mb-5 text-xl font-bold">
                Social media
              </h2>

              <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[var(--border-color)]">
                      <th className="px-4 py-3 text-xs font-semibold text-[var(--text-secondary)]">
                        Platform
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-[var(--text-secondary)]">
                        Handle
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {socials.map((social) => {
                      const Icon = social.icon;

                      return (
                        <tr
                          key={social.name}
                          className="border-b border-[var(--border-color)] last:border-0"
                        >
                          <td className="px-4 py-4">
                            <span className="flex items-center gap-2 text-sm font-medium">
                              <Icon className="shrink-0" />
                              {social.name}
                            </span>
                          </td>

                          <td className="px-4 py-4">
                            <a
                              href={social.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[var(--text-secondary)] transition hover:text-emerald-500"
                            >
                              {social.handle}
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-9">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                Send a message
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Start a conversation
              </h2>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Tell me what you're working on, what you need, and where you
                want to take it.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className={inputStyle}
                  />
                </div>
              </div>

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
                  placeholder="+91"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Project details
                </label>

                <textarea
                  name="text"
                  placeholder="Tell me about your project, goals, requirements, or opportunity..."
                  required
                  rows={7}
                  className={`${inputStyle} resize-none leading-6`}
                />
              </div>

              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] p-4">
                <p className="text-xs leading-5 text-[var(--text-secondary)]">
                  Sending a message may take a few seconds because my backend
                  is hosted on a free-tier server. Please wait for confirmation
                  before sending another message.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[var(--text-secondary)]">
                  I usually respond within 24 hours.
                </p>

                <GlowButton
                  type="submit"
                  disabled={submitting}
                  className="group w-full sm:w-auto"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    {submitting ? "Sending..." : "Send message"}

                    {!submitting && (
                      <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </span>
                </GlowButton>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
