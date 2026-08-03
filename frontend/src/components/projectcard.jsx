import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { statusColors } from '../data/project';

const ProjectCard = ({ project, index }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-[var(--bg-card)]/90 px-3 py-1 text-xs font-semibold text-emerald-700 backdrop-blur">
          Featured {index + 1}
        </span>
      </div>

      <div className="flex flex-col p-6">
        <h3 className="text-2xl font-bold text-[var(--text-main)]">
          {project.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              statusColors[project.status]
            }`}
          >
            {project.status}
          </span>

          <div className="flex items-center gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--bg-main)] p-2.5 text-[var(--text-secondary)] transition hover:bg-emerald-100 hover:text-emerald-700"
            >
              <FaExternalLinkAlt size={16} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--bg-main)] p-2.5 text-[var(--text-secondary)] transition hover:bg-emerald-100 hover:text-emerald-700"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        <p className="mt-4 leading-7 text-[var(--text-secondary)]">
          {project.description}
        </p>

        <div className="mt-6">
          <p className="mb-3 text-sm font-semibold text-[var(--text-secondary)]">
            Tech Stack
          </p>

          <div className="flex items-center">
            {project.techStack.map((tech, i) => (
              <div
                key={tech.name}
                className="group/icon relative"
                style={{
                  marginLeft: i === 0 ? 0 : '-12px',
                  zIndex: project.techStack.length - i,
                }}
              >
                <div className="flex h-11 w-11 items-center rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-3 shadow-md transition-all duration-300 group-hover/icon:w-32">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="h-5 w-5 flex-shrink-0"
                  />
                  <span className="ml-2 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-[var(--text-main)] opacity-0 transition-all duration-300 group-hover/icon:max-w-[80px] group-hover/icon:opacity-100">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;