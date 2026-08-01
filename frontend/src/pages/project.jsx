import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import weatherApp from '../assets/photos/weatherApp.png';
import Ecommerce from '../assets/photos/basicEcommerce.png';

const projects = [
  {
    id: 1,
    name: 'Basic Ecommerce',
    image: Ecommerce,
    description:
      'A full-stack ecommerce application built with Node.js, Express, EJS, and PostgreSQL featuring product management and server-rendered pages.',
    github: 'https://github.com/Yousuf-yk/basic_ecommerce.git',
    live: '#',
    techStack: ['Node', 'Express', 'Postgres'],
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Weather App',
    image: weatherApp,
    description:
      'A React weather application that fetches real-time weather data using APIs with a responsive and user-friendly interface.',
    github: 'https://github.com/Yousuf-yk/weather-app.git',
    live: '#',
    techStack: ['React', 'API'],
    status: 'Completed',
  },
];

const techColors = {
  React: 'bg-cyan-50 text-cyan-600 border-cyan-200 shadow-cyan-200/50',
  Node: 'bg-green-50 text-green-700 border-green-200 shadow-green-200/50',
  Express: 'bg-gray-100 text-gray-800 border-gray-300 shadow-gray-200/50',
  Postgres: 'bg-blue-50 text-blue-700 border-blue-200 shadow-blue-200/50',
  API: 'bg-purple-50 text-purple-700 border-purple-200 shadow-purple-200/50',
};

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="project" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-6">
      {/* Background glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl" />

      {/* Heading */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Portfolio
        </p>
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-gray-600">
          Real-world applications built with modern technologies, focusing on clean architecture, APIs, and responsive design.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 backdrop-blur">
                Featured {index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col p-6">
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>

              {/* Status & Links Line (Just before the paragraph) */}
              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {project.status}
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:bg-emerald-100 hover:text-emerald-700"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:bg-emerald-100 hover:text-emerald-700"
                    title="View Code"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-600">{project.description}</p>

              {/* Stack */}
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-gray-500">Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1.5 text-sm font-semibold shadow-md transition hover:-translate-y-1 ${
                        techColors[tech] || 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View more */}
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