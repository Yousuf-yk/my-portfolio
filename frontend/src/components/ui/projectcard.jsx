import { statusColors } from '../../data/project';
import React from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border-color)]
        bg-[var(--bg-card)]
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-300/70
        hover:shadow-[0_24px_60px_rgba(16,185,129,0.12)]
      "
    >
      {/* Preview */}
      <div className="relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={project.video}
          aria-label={project.name}
          className="
            h-52
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.035]
            sm:h-56
          "
        />

        {/* Preview overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/25
            via-transparent
            to-transparent
            opacity-70
          "
        />

        {/* Project number */}
        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/20
            bg-black/45
            px-3
            py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-white
            backdrop-blur-md
          "
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Status */}
        <span
          className={`
            absolute
            right-4
            top-4
            rounded-full
            border
            px-3
            py-1.5
            text-[10px]
            font-semibold
            backdrop-blur-md
            ${statusColors[project.status]}
          `}
        >
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <h3
              className="
                text-xl
                font-bold
                tracking-tight
                text-[var(--text-main)]
                sm:text-2xl
              "
            >
              {project.name}
            </h3>

            <p
              className="
                mt-1.5
                text-xs
                font-medium
                text-[var(--text-secondary)]
              "
            >
              Featured project
            </p>
          </div>

          {/* Project actions */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Live */}
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
                hover:bg-emerald-50
                hover:text-emerald-700
              "
            >
              <FaExternalLinkAlt size={13} />
            </a>

            {/* GitHub */}
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
                hover:bg-emerald-50
                hover:text-emerald-700
              "
            >
              <FaGithub size={17} />
            </a>

            {/* Project page */}
            {/* <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} project`}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-emerald-600
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-emerald-700
                hover:shadow-lg
                hover:shadow-emerald-500/20
              "
            >
              <FaArrowRight size={13} />
            </a> */}
          </div>
        </div>

        {/* Description */}
        <p
          className="
            mt-4
            text-sm
            leading-6
            text-[var(--text-secondary)]
            sm:text-[15px]
          "
        >
          {project.description}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-[var(--border-color)]" />

        {/* Technology stack */}
        <div>
          <p
            className="
              mb-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[var(--text-secondary)]
            "
          >
            Technologies
          </p>

          <div className="flex items-center gap-2.5">
            {project.techStack.map((tech) => (
              <div
                key={tech.name}
                className="group/tech relative"
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[var(--border-color)]
                    bg-[var(--bg-main)]
                    transition-all
                    duration-300
                    group-hover/tech:-translate-y-1
                    group-hover/tech:border-emerald-300
                    group-hover/tech:bg-emerald-50
                    group-hover/tech:shadow-md
                  "
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="
                      h-5
                      w-5
                      object-contain
                      transition-transform
                      duration-300
                      group-hover/tech:scale-110
                    "
                  />
                </div>

                {/* Tooltip */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-full
                    left-1/2
                    z-20
                    mb-2
                    -translate-x-1/2
                    translate-y-1
                    whitespace-nowrap
                    rounded-md
                    bg-[var(--text-main)]
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-medium
                    text-white
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-200
                    group-hover/tech:translate-y-0
                    group-hover/tech:opacity-100
                  "
                >
                  {tech.name}

                  <span
                    className="
                      absolute
                      left-1/2
                      top-full
                      h-2
                      w-2
                      -translate-x-1/2
                      -translate-y-1/2
                      rotate-45
                      bg-[var(--text-main)]
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom action */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-[var(--border-color)]
            pt-4
          "
        >
          <span
            className="
              text-xs
              font-medium
              text-[var(--text-secondary)]
            "
          >
            Explore project
          </span>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-[var(--text-main)]
              transition-colors
              duration-300
              hover:text-emerald-600
            "
          >
            View details
            <FaArrowRight
              size={11}
              className="
               transition-transform
                duration-300
               group-hover:translate-x-1
             "
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

