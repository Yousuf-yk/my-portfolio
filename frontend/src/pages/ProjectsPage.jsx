import React from "react";
import { projects } from "../data/project";
import ProjectCard from "../components/ui/projectcard";

function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--text-main)]/[0.04] blur-3xl" />

        <div className="absolute right-[-150px] top-[35%] h-[350px] w-[350px] rounded-full bg-[var(--text-main)]/[0.03] blur-3xl" />

        <div className="absolute left-[-150px] bottom-[10%] h-[300px] w-[300px] rounded-full bg-[var(--text-main)]/[0.03] blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.04] px-4 py-2 text-xs font-medium text-[var(--text-secondary)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-main)]" />
                My Work
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Projects
                <span className="text-[var(--text-secondary)]">.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
                A collection of projects I've built while exploring full-stack
                development, modern frontend technologies, APIs, databases,
                and everything in between.
              </p>
            </div>

            {/* Project count */}
            <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.03] px-5 py-4 backdrop-blur-md">
              <div>
                <p className="text-3xl font-bold">
                  {String(projects.length).padStart(2, "0")}
                </p>

                <p className="text-xs text-[var(--text-secondary)]">
                  Projects
                </p>
              </div>

              <div className="h-10 w-px bg-[var(--text-main)]/10" />

              <div>
                <p className="text-sm font-semibold">Building</p>

                <p className="text-xs text-[var(--text-secondary)]">
                  Full Stack & Web
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech strip */}
        <div className="mb-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.025] sm:grid-cols-4">
          {[
            ["Frontend", "React & Modern UI"],
            ["Backend", "Node & Express"],
            ["Database", "PostgreSQL"],
            ["Focus", "Full Stack"],
          ].map(([title, description], index) => (
            <div
              key={title}
              className={`px-5 py-4 ${
                index !== 0
                  ? "border-t border-[var(--text-main)]/10 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-main)]">
                {title}
              </p>

              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Section heading */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Selected work
            </p>

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Things I've built
            </h2>
          </div>

          <div className="hidden items-center gap-2 text-xs text-[var(--text-secondary)] sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-main)]" />
            {projects.length} total
          </div>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Card number */}
              <div className="pointer-events-none absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--text-main)]/10 bg-[var(--bg-main)]/70 text-[10px] font-semibold text-[var(--text-secondary)] backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="transition duration-300 group-hover:-translate-y-1">
                <ProjectCard project={project} index={index} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.025] px-6 py-8 sm:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold">
                Always building something new.
              </p>

              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                More experiments, ideas and projects are on the way.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--text-main)]" />
              Currently building
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;