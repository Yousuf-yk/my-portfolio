
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const isCompleted = project.status === "Completed";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] transition-all duration-300 hover:border-[var(--text-secondary)]/30">

      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:aspect-[1.9/1]"
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">

        {/* Title & Links */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="min-w-0 text-xl font-semibold tracking-tight text-[var(--text-main)] sm:text-2xl lg:text-3xl">
            {project.name}
          </h3>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} live`}
                className="text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:rotate-12 hover:text-[var(--text-main)]"
              >
                <FaExternalLinkAlt className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} source code`}
              className="text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:-rotate-12 hover:text-[var(--text-main)]"
            >
              <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--text-secondary)] sm:mt-4 sm:text-base sm:leading-7">
          {project.description}
        </p>

        {/* Technologies & Status */}
        <div className="mt-auto pt-7 sm:pt-9 lg:pt-10">
          <p className="mb-3 text-xs font-medium tracking-wide text-[var(--text-main)] sm:text-sm">
            TECH-STACK
          </p>

          <div className="flex flex-col items-start gap-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">

            {/* Technology Icons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="flex h-8 w-8 items-center justify-center transition-transform duration-300 hover:-translate-y-1 sm:h-9 sm:w-9"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    loading="lazy"
                    className={`h-7 w-7 object-contain sm:h-8 sm:w-8 ${
                      tech.darkIcon ? "dark:invert" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Project Status */}
            <span
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium sm:text-sm ${
                isCompleted
                  ? "bg-emerald-500/10 text-[var(--text-main)]"
                  : "bg-[var(--bg-main)] text-[var(--text-secondary)]"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isCompleted
                    ? "bg-emerald-500"
                    : "border border-current"
                }`}
              />
              {project.status}
            </span>

          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
