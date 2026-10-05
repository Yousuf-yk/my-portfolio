import React from 'react';
import { FaGithub, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { statusColors } from '../../data/project';

const ProjectCard = ({ project, index }) => {
  const iconLinkClasses = "text-[var(--text-secondary)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-6 hover:text-[var(--text-main)]";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-7">
      {/* Header */}
      <div className="flex items-start justify-between gap-5">
        <h3 className="min-w-0 font-serif text-3xl italic leading-tight tracking-tight text-[var(--text-main)] sm:text-[34px]">
          {project.name}
        </h3>

        <div className="flex shrink-0 items-center gap-3 pt-1">
          <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live`} className={iconLinkClasses}>
            <FaGlobe size={24} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source code`} className={iconLinkClasses}>
            <FaGithub size={26} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 line-clamp-2 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-6">
        <p className="mb-3 text-base font-medium text-[var(--text-secondary)]">Technologies</p>
        <div className="flex items-center -space-x-3">
          {project.techStack.map((tech, techIdx) => (
            <div key={tech.name} className="group/tech relative transition-all duration-300 hover:z-30" style={{ zIndex: project.techStack.length - techIdx }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-main)] transition-all duration-300 group-hover/tech:-translate-y-1 group-hover/tech:shadow-md">
                <img src={tech.src} alt={tech.name} className="h-6 w-6 object-contain transition-transform duration-300 group-hover/tech:scale-110" />
              </div>
              <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-[var(--text-main)] px-2.5 py-1.5 text-[10px] font-medium text-[var(--bg-main)] opacity-0 shadow-lg transition-all duration-200 group-hover/tech:translate-y-0 group-hover/tech:opacity-100">
                {tech.name}
                <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[var(--text-main)]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status & View Details */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <span className={`inline-flex items-center gap-2.5 rounded-lg border px-4 py-1.5 text-sm font-medium ${statusColors[project.status]}`}>
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-current " />
          {project.status}
        </span>

        <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lg font-medium text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-main)]">
          View Details
          <FaArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Video Preview */}
      <div className="relative -mb-6 -mr-6 mt-6 flex-1 overflow-hidden rounded-tl-xl border-l border-t border-[var(--border-color)] bg-white sm:-mb-7 sm:-mr-7">
        <video autoPlay muted loop playsInline src={project.video} aria-label={project.name} className="h-52 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035] sm:h-60" />
        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;