import React from "react";
import profileImg from "../assets/photos/yousufimg2.jpeg";
import {
  TextAnimationProvider,
  AnimatedText,
} from "../context/textAnimation";

function AboutPage() {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
    "Responsive Design",
    "Authentication",
    "Vite",
    "SQL",
  ];

  const journey = [
    {
      number: "01",
      title: "Started with the fundamentals",
      description:
        "Started with HTML, CSS, and JavaScript, building a strong understanding of how the web actually works.",
    },
    {
      number: "02",
      title: "Moved into full-stack development",
      description:
        "Progressed into React, Node.js, Express, PostgreSQL, REST APIs, authentication, and complete application architecture.",
    },
    {
      number: "03",
      title: "Building real projects",
      description:
        "Now focused on turning what I learn into practical projects that involve real frontend, backend, database, and deployment challenges.",
    },
  ];

  return (
    <TextAnimationProvider delaySpeed={0.01}>
      <main className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[15%] top-[-180px] h-[420px] w-[420px] rounded-full bg-[var(--text-main)]/[0.035] blur-3xl" />

          <div className="absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-[var(--text-main)]/[0.025] blur-3xl" />

          <div className="absolute bottom-[-200px] left-[20%] h-[400px] w-[400px] rounded-full bg-[var(--text-main)]/[0.025] blur-3xl" />
        </div>

        <section className="mx-auto max-w-7xl px-5 pb-16  sm:px-8 lg:px-10">
          {/* ───────────────── HERO ───────────────── */}
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-main)]" />
                About me
              </div>

              <AnimatedText
                as="h1"
                className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl"
                text="I build software to understand how it works."
              />

              <AnimatedText
                as="p"
                className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg"
                text="I'm Yousuf Khan, a full-stack developer focused on building useful, responsive, and maintainable web applications."
              />

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 text-sm text-[var(--text-secondary)]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--text-main)]" />
                  Open to internships
                </span>

                <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 text-sm text-[var(--text-secondary)]">
                  Full-stack development
                </span>
              </div>
            </div>

            {/* Profile image */}
            <div className="relative mx-auto w-full max-w-[360px] lg:ml-auto">
              <div className="absolute -inset-3 rounded-[2rem] border border-[var(--border-color)] opacity-50" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border-color)] bg-[var(--bg-card)] p-2 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Yousuf Khan"
                  className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
                />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white backdrop-blur-xl">
                  <div>
                    <p className="text-sm font-semibold">Yousuf Khan</p>
                    <p className="text-xs text-white/60">
                      Full-stack developer
                    </p>
                  </div>

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                </div>
              </div>
            </div>
          </div>

          {/* ───────────────── QUICK INFO ───────────────── */}
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]/50 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Based in", "Bangalore, India"],
              ["Education", "Bachelor of Computer Applications"],
              ["Current focus", "Full-stack development"],
              ["Looking for", "Internships & SDE roles"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`px-5 py-5 ${
                  index !== 0
                    ? "border-t border-[var(--border-color)] sm:border-l sm:border-t-0"
                    : ""
                } ${
                  index === 2
                    ? "lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  {label}
                </p>

                <p className="mt-2 text-sm font-medium text-[var(--text-main)]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* ───────────────── ABOUT + FOCUS ───────────────── */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-bold text-[var(--text-secondary)]">
                  01
                </span>

                <div className="h-px flex-1 bg-[var(--border-color)]" />

                <span className="text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  About
                </span>
              </div>

              <AnimatedText
                as="h2"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                text="More than just writing code."
              />

              <AnimatedText
                as="p"
                className="mt-5 max-w-3xl leading-8 text-[var(--text-secondary)]"
                text="I enjoy understanding applications from end to end — how the interface behaves, how requests move through an API, how data is structured, how authentication works, and how everything eventually gets deployed."
              />

              <AnimatedText
                as="p"
                className="mt-4 max-w-3xl leading-8 text-[var(--text-secondary)]"
                text="My goal isn't to collect frameworks. It's to build strong fundamentals and become capable of designing and shipping software that is reliable, maintainable, and useful."
              />
            </div>

            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                Currently focused on
              </p>

              <div className="mt-6 space-y-5">
                {[
                  "Backend architecture",
                  "Database design",
                  "REST API development",
                  "Software engineering fundamentals",
                  "Production-ready projects",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border-color)] text-[10px] font-semibold text-[var(--text-secondary)]">
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

          {/* ───────────────── JOURNEY ───────────────── */}
          <div className="mt-12">
            <div className="mb-7 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  The journey
                </p>

                <AnimatedText
                  as="h2"
                  className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                  text="How I got here"
                />
              </div>

              <span className="hidden text-xs text-[var(--text-secondary)] sm:block">
                01 — 03
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {journey.map((item) => (
                <div
                  key={item.number}
                  className="group rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[var(--text-secondary)]">
                      {item.number}
                    </span>

                    <span className="h-px w-10 bg-[var(--border-color)] transition-all duration-300 group-hover:w-16" />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ───────────────── SKILLS ───────────────── */}
          <div className="mt-12 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-7 sm:p-9">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  Toolbox
                </p>

                <AnimatedText
                  as="h2"
                  className="mt-2 text-3xl font-bold"
                  text="Technologies I work with"
                />
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                Tools I've used while building projects.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--text-main)] hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ───────────────── APPROACH ───────────────── */}
          <div className="mt-12">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                My approach
              </p>

              <AnimatedText
                as="h2"
                className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                text="How I like to build"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Before jumping into code, understand the problem, data flow, users, and constraints.",
                },
                {
                  number: "02",
                  title: "Build",
                  text: "Turn the idea into a clean, responsive implementation with sensible architecture.",
                },
                {
                  number: "03",
                  title: "Improve",
                  text: "Test, refactor, learn from mistakes, and gradually make the project more reliable.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-7"
                >
                  <span className="text-5xl font-bold text-[var(--text-main)]/[0.06]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ───────────────── BOTTOM CTA ───────────────── */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] px-7 py-8 sm:px-10 sm:py-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  What's next
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  More projects. Better fundamentals. Bigger problems.
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  I'm currently focused on becoming a stronger software
                  engineer by building, learning, and taking on increasingly
                  challenging projects.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--text-main)]" />
                Open to opportunities
              </div>
            </div>
          </div>
        </section>
      </main>
    </TextAnimationProvider>
  );
}

export default AboutPage;