
import React from "react";
import profileImg from "../assets/photos/yousufimg2.jpeg";
import { FallingLeaves } from "falling-leaves/react"; 


function AboutPage() {
  
  const facts = [
    { label: "Location", value: "Bengaluru, India" },
    { label: "Education", value: "BCA Student" },
    { label: "Specialization", value: "Full-stack Development" },
    { label: "Looking for", value: "Internships & SDE Roles" },
  ];

  const journey = [
    {
      number: "01",
      title: "The Fundamentals",
      description:
        "Started with HTML, CSS and JavaScript, learning how websites work and how to build interactive interfaces.",
    },
    {
      number: "02",
      title: "Full-stack Development",
      description:
        "Expanded into React, Node.js, Express and PostgreSQL, learning to build applications from frontend to backend.",
    },
    {
      number: "03",
      title: "Building & Improving",
      description:
        "Now developing practical applications, exploring deployment, databases and software engineering principles.",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vite"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "SQL", "MongoDB"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "Docker", "AWS"],
    },
  ];

  const interests = [
    "Full-stack application development",
    "Backend architecture & API design",
    "Database design and management",
    "AI-powered applications",
    "Software engineering fundamentals",
  ];

  const approaches = [
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
  ];

  return (
  <>
    <FallingLeaves fullscreen shape="maple" />

    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        {/* Hero */}
        <section className="grid items-center gap-10 py-8 sm:py-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              About / Introduction
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Building things.
              <br />
              Understanding how they work.
              <span className="text-[var(--text-secondary)]">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              I'm Yousuf Khan, a BCA student and full-stack developer
              interested in building useful web applications and
              understanding software beyond just the user interface.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              I enjoy working across frontend, backend and databases,
              turning ideas into functional applications while
              continuously improving my engineering fundamentals.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-card)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)]">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to internships
              </span>

              <span className="rounded-full bg-[var(--bg-card)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)]">
                Full-stack Developer
              </span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mx-auto w-full max-w-[340px] lg:ml-auto">
            <div className="overflow-hidden rounded-2xl bg-[var(--bg-card)]">
              <img
                src={profileImg}
                alt="Yousuf Khan"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Yousuf Khan</h2>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Full-stack Developer
                </p>
              </div>

              <span className="text-xs text-[var(--text-secondary)]">
                Bengaluru, IN
              </span>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="grid grid-cols-2 gap-x-6 gap-y-7 border-y border-[var(--border-color)] py-7 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="text-xs text-[var(--text-secondary)]">
                {fact.label}
              </p>
              <p className="mt-2 text-sm font-medium leading-6">
                {fact.value}
              </p>
            </div>
          ))}
        </section>

        {/* About & Interests */}
        <section className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              A little about me
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              I prefer understanding the system, not just the code.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              <p>
                My interest in development goes beyond creating
                interfaces. I like understanding how different
                parts of an application communicate, how APIs
                handle requests, how databases organize information
                and how applications are deployed.
              </p>

              <p>
                I've been exploring the full-stack ecosystem through
                personal projects, experimenting with different
                technologies and learning from the problems that
                come with building complete applications.
              </p>

              <p>
                My long-term goal is to become a strong software
                engineer capable of designing, developing and
                maintaining reliable software.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Areas of interest
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              What I'm exploring
            </h2>

            <div className="mt-7 divide-y divide-[var(--border-color)]">
              {interests.map((interest, index) => (
                <div
                  key={interest}
                  className="flex items-center gap-4 py-4"
                >
                  <span className="text-xs tabular-nums text-[var(--text-secondary)]">
                    0{index + 1}
                  </span>

                  <p className="text-sm font-medium">{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Journey */}
        <section className="py-12">
          <div className="mb-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              My journey
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              How I got here.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {journey.map((item) => (
              <div
                key={item.number}
                className="border-t border-[var(--border-color)] pt-5"
              >
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="py-14">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Technical skills
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                My toolbox.
              </h2>
            </div>

            <p className="text-sm text-[var(--text-secondary)]">
              Technologies I've worked with.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="border-t border-[var(--border-color)] pt-5"
              >
                <h3 className="text-sm font-semibold">{group.title}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-[var(--bg-card)] px-3 py-2 text-xs text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-main)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Approach */}
        <section className="py-12">
          <div className="mb-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--text-secondary)]">
              My approach
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              How I like to build
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {approaches.map((item) => (
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
        </section>

        {/* Closing Section */}
        <section className="mt-8 border-t border-[var(--border-color)] pt-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Looking ahead
          </p>

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Learning, building and becoming a better engineer.
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                Currently focused on building stronger technical
                fundamentals, developing practical projects and
                preparing for software engineering opportunities.
              </p>
            </div>

            <span className="inline-flex w-fit shrink-0 items-center gap-2 text-xs text-[var(--text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to opportunities
            </span>
          </div>
        </section>
      </section>
    </main>
    </>
  );
}

export default AboutPage;
