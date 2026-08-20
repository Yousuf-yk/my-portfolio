import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "How to Push Your Code to GitHub",
      description:
        "A practical step-by-step guide to initializing a repository, connecting a remote, and pushing local code to GitHub using Git.",
      date: "Recently uploaded",
      readTime: "4 min read",
      link: "https://medium.com/@yk0574292/how-to-push-your-code-to-github-33dd2d49132e",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--bg-main)] px-5 py-12 text-[var(--text-main)] sm:px-8 sm:py-14 lg:px-10">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-emerald-500/[0.035] blur-3xl" />

        <div className="absolute right-[-120px] bottom-[-100px] h-80 w-80 rounded-full bg-[var(--text-main)]/[0.025] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Writing
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Latest writing
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
              Technical articles and practical guides based on what I learn
              while building software.
            </p>
          </div>

          <span className="text-xs text-[var(--text-secondary)]">
            {blogs.length} article{blogs.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Articles */}
        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-xl sm:p-7"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-emerald-500/[0.05] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Top row */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[10px] font-bold text-[var(--text-secondary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Featured article
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-2 pl-11 text-xs text-[var(--text-secondary)] sm:pl-0">
                    <span>{blog.date}</span>

                    <span className="opacity-50">•</span>

                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <h3 className="text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-emerald-600 sm:text-2xl">
                      {blog.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base sm:leading-7">
                      {blog.description}
                    </p>
                  </div>

                  {/* Read button */}
                  <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-2.5 text-sm font-semibold text-emerald-600 transition-all duration-300 group-hover:gap-3 group-hover:border-emerald-300/60">
                    Read on Medium
                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-7 flex flex-col gap-2 border-t border-[var(--border-color)] pt-5 text-xs text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <span>More technical writing coming soon.</span>

          <span className="hidden sm:block">
            Learn → Build → Write
          </span>
        </div>
      </div>
    </section>
  );
}

export default Blog;