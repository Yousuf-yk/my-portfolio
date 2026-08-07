import React, { useState } from 'react';
import { projects } from '../../data/project';
import ProjectCard from './projectcard';
import { Link } from 'react-router-dom';
import  GlowButton  from '../layout/button';

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section
      id="project"
      className="relative mx-auto max-w-6xl px-5 py-5 sm:px-6"
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
          <React.Fragment key={project.id}>
            <ProjectCard project={project} index={index} />

            {/* Custom card inserted after the first project */}
            {/* {index === 0 && (
              <article className="flex min-h-[420px] items-center justify-center rounded-3xl border border-dashed border-emerald-300 bg-emerald-50/70 p-8 backdrop-blur-xl">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
                    Currently building
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-emerald-700">
                    More projects are coming
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                    I’m working on AI-powered, full-stack, and system design
                    focused projects that emphasize scalability, performance,
                    and clean architecture.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      AI
                    </span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      PERN
                    </span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      APIs
                    </span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      Docker
                    </span>
                  </div>
                </div>
              </article>
            )} */}
          </React.Fragment>
        ))}
      </div>

      {projects.length > 2 && (
  <div className="mt-14 flex justify-center">
    <Link to="/projects">
      <GlowButton>View All Projects</GlowButton>
    </Link>
  </div>
)}
    </section>
  );
}

export default Projects;