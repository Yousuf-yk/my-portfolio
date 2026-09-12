import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { projects } from "../../data/project";
import ProjectCard from "./projectcard";

function Projects() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section
      id="project"
      className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-14 text-[var(--text-main)] sm:px-10 sm:py-20 lg:px-20 lg:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neutral-400/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
            Selected Work
          </p>

          <h2 className="text-4xl font-light leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Projects built with{" "}
            <span className="font-serif italic text-neutral-500">
              purpose.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm font-light leading-7 text-[var(--text-secondary)] sm:text-base">
            Real-world applications built with modern technologies, clean
            architecture, thoughtful interfaces, and reliable backend systems.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="group">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="font-mono text-[10px] text-[var(--text-secondary)]">
                  0{index + 1}
                </span>

                <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Project
                </span>
              </div>

              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {projects.length > 2 && (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-4 rounded-full bg-[var(--text-main)] px-7 py-3.5 text-sm font-medium text-[var(--bg-main)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span>View All Projects</span>

              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;