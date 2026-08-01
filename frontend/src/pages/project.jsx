import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import textogram from '../assets/photos/textogram.png';
import Ecommerce from '../assets/photos/basicEcommerce.png';

const projects = [
  {
    id: 1,
    name: 'Pluto Ecommerce',
    image: Ecommerce,
    description:
      ' full-stack ecommerce application built with Node.js, Express, React, and PostgreSQL featuring product management and server-rendered pages.',
    github: 'https://github.com/Yousuf-yk/pluto.git',
    live: '#',
    techStack: [
      { name: 'React', src: '/svg/React.svg' },
      { name: 'Node.js', src: '/svg/Node.js.svg' },
      { name: 'Express', src: '/svg/Express.svg' },
      { name: 'PostgreSQL', src: '/svg/PostgresSQL.svg' },
    ],
    status: 'Pending',
  },
  {
    id: 2,
    name: 'textOgram',
    image: textogram,
    description:
      'online texting app that allows users to send and receive messages in real-time, with a focus on simplicity and ease of use.',
    github: 'https://github.com/Yousuf-yk/textOgram.git',
    live: '#',
    techStack: [
      { name: 'React', src: '/svg/React.svg' },
      { name: 'Node.js', src: '/svg/Node.js.svg' },
      { name: 'Express', src: '/svg/Express.svg' },
      { name: 'PostgreSQL', src: '/svg/PostgresSQL.svg' },
      
    ],
    status: 'Completed',
  },
];

const statusColors = {
  Completed: 'bg-green-100 text-green-700 border-green-200',
  Pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
};

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section
      id="project"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-6"
    >
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-900/20" />

      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Portfolio
        </p>
        <h2 className="text-4xl font-bold text-[var(--text-main)] sm:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[var(--text-secondary)]">
          Real-world applications built with modern technologies, focusing on
          clean architecture, APIs, and responsive design.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
          >
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
                      style={{ marginLeft: i === 0 ? 0 : '-12px', zIndex: project.techStack.length - i }}
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
        ))}
      </div>

      {projects.length > 2 && (
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-2xl border border-emerald-300 bg-emerald-50 px-8 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            {showAll ? 'Show Less' : 'View More Projects'}
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;