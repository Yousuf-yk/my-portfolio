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
      className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-20 text-[var(--text-main)] sm:px-12 sm:py-28 lg:px-20"
    >
      {/* Subtle, elegant background gradients instead of bright colors */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-neutral-400/[0.03] blur-3xl" />
        <div className="absolute -right-[10%] bottom-0 h-[500px] w-[500px] rounded-full bg-neutral-400/[0.03] blur-3xl" />
      </div> */}

      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--text-secondary)]">
            Inquiries
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-[40px]">
            Let's create something <br className="hidden sm:block" />
           extraordinary
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          
          {/* Left Column: Contact Details */}
          <div className="flex flex-col space-y-10">
            <p className="text-sm font-light leading-relaxed text-[var(--text-secondary)]">
              Whether you have a project in mind, an internship opportunity, or simply want to connect, feel free to reach out. I am currently open to new ventures.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <a
                href="mailto:yk0574292@gmail.com"
                className="group flex items-start gap-5 transition-opacity hover:opacity-70"
              >
                <div className="mt-1 text-neutral-400">
                  <HiMail size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">
                    Email
                  </p>
                  <p className="mt-1 text-base font-light">
                    yk0574292@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="mt-1 text-neutral-400">
                  <HiPhone size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">
                    Phone
                  </p>
                  <p className="mt-1 text-base font-light">
                    +91 **********
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="mt-1 text-neutral-400">
                  <HiLocationMarker size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">
                    Location
                  </p>
                  <p className="mt-1 text-base font-light">
                    Bangalore, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid gap-10 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-sm font-light text-[var(--text-main)] placeholder-neutral-400 outline-none transition-colors focus:border-[var(--text-main)] focus:ring-0 dark:border-neutral-700"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-sm font-light text-[var(--text-main)] placeholder-neutral-400 outline-none transition-colors focus:border-[var(--text-main)] focus:ring-0 dark:border-neutral-700"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="number"
                  placeholder="Phone Number (Optional)"
                  className="w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-sm font-light text-[var(--text-main)] placeholder-neutral-400 outline-none transition-colors focus:border-[var(--text-main)] focus:ring-0 dark:border-neutral-700"
                />
              </div>

              <div className="relative">
                <textarea
                  name="text"
                  rows={4}
                  required
                  placeholder="How can we collaborate?"
                  className="w-full resize-none border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-sm font-light text-[var(--text-main)] placeholder-neutral-400 outline-none transition-colors focus:border-[var(--text-main)] focus:ring-0 dark:border-neutral-700"
                />
              </div>

              <div className=" center flex justify-center ">
                <GlowButton
                  type="submit"
                  disabled={submitting}
                  className="group !bg-gray-500 px-6 py-2 hover:!bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="inline-flex items-center gap-3">
                    {submitting ? "Transmitting..." : "Send Message"}
                    {!submitting && (
                      <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </span>
                </GlowButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;