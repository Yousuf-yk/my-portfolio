import React from 'react';
import { projects } from '../data/project';
import ProjectCard from '../components/projectcard';

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="mb-14 text-center">
        <h1 className="text-5xl font-bold text-[var(--text-main)]">
          All Projects
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          A complete collection of my full-stack and frontend projects.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;