import React, { useState } from 'react';
import { projects } from '../../data/project';
import ProjectCard from './projectcard';
import { Link } from 'react-router-dom';
import GlowButton from '../layout/button';

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section
      id="project"
      className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-20 text-[var(--text-main)] sm:px-12 sm:py-28 lg:px-20"
    >
      {/* Subtle, elegant background gradient replacing the vibrant emerald */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="absolute top-0 h-[600px] w-[600px] -translate-y-1/4 rounded-full bg-neutral-400/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Editorial Header Section */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--text-secondary)]">
            Portfolio
          </p>
          
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-[40px]">
            Selected Works.
          </h2>
          
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-[var(--text-secondary)]">
            A curated selection of real-world applications focusing on clean architecture, seamless integrations, and refined user experiences.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {visibleProjects.map((project, index) => (
            <React.Fragment key={project.id}>
              <ProjectCard project={project} index={index} />
            </React.Fragment>
          ))}
        </div>

        {/* Action Button - Kept exactly as requested */}
        {projects.length > 2 && (
          <div className="mt-10 flex justify-center">
            <Link to="/projects">
              <GlowButton className="!bg-gray-500 hover:!bg-gray-700">
                View All Projects
              </GlowButton>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;