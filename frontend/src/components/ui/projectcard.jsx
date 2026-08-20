import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { statusColors } from '../../data/project';

const ProjectCard = ({ project, index }) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border-color)]
        bg-[var(--bg-card)]
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1.5
        hover:border-emerald-300/70
        hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="
            h-48
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.04]
            sm:h-52
          "
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Project number */}
        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/20
            bg-black/50
            px-3
            py-1
            text-[11px]
            font-semibold
            text-white
            backdrop-blur-md
          "
        >
          Project {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Title + status */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-main)] sm:text-2xl">
              {project.name}
            </h3>

            <span
              className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold sm:text-xs ${
                statusColors[project.status]
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Links */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live`}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border-color)]
                bg-[var(--bg-main)]
                text-[var(--text-secondary)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-300
                hover:bg-emerald-100
                hover:text-emerald-700
              "
            >
              <FaExternalLinkAlt size={14} />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} source code`}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border-color)]
                bg-[var(--bg-main)]
                text-[var(--text-secondary)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-300
                hover:bg-emerald-100
                hover:text-emerald-700
              "
            >
              <FaGithub size={17} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)] sm:text-[15px]">
          {project.description}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-[var(--border-color)]" />

        {/* Tech stack */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Built with
            </p>

            <span className="text-[10px] text-[var(--text-secondary)]">
              {project.techStack.length} technologies
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <div
                key={tech.name}
                className="
                  group/tech
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[var(--border-color)]
                  bg-[var(--bg-main)]
                  px-2.5
                  py-1.5
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-emerald-300
                  hover:bg-emerald-500/5
                "
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="
                    h-4
                    w-4
                    object-contain
                    transition-transform
                    duration-300
                    group-hover/tech:scale-110
                  "
                />

                <span className="text-[11px] font-medium text-[var(--text-main)]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;