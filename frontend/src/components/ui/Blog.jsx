import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'How to Push Your Code to GitHub',
      description:
        'A step-by-step guide on initializing a repository, connecting a remote, and pushing your local code to GitHub using Git.',
      date: 'Recently uploaded',
      readTime: '4 min read',
      link: 'https://medium.com/@yk0574292/how-to-push-your-code-to-github-33dd2d49132e',
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Writing
          </p>

          <h2 className="text-4xl font-bold text-[var(--text-main)] md:text-5xl">
            Latest writing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Technical articles and practical guides based on what I learn while
            building software.
          </p>
        </div>

        <div className="grid gap-8">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
            >
              {/* Gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-sky-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Featured article
                  </span>

                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-[var(--text-main)] transition-colors duration-300 group-hover:text-emerald-700">
                  {blog.title}
                </h3>

                <p className="leading-7 text-[var(--text-secondary)]">
                  {blog.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-600 transition-all duration-300 group-hover:gap-3">
                  Read on Medium
                  <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;