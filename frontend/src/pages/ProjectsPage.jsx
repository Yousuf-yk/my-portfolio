
import React, { useMemo, useState } from "react";
import { projects } from "../data/project";
import ProjectCard from "../components/ui/projectcard";

const filters = ["All", "Completed", "In Progress"];

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const completedCount = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const inProgressCount = projects.length - completedCount;

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" ||
        (activeFilter === "Completed" &&
          project.status === "Completed") ||
        (activeFilter === "In Progress" &&
          project.status !== "Completed");

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((tech) =>
          tech.name.toLowerCase().includes(query)
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-10">

        {/* Page Header */}
        <header className="mb-10 sm:mb-14">

          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Portfolio / Projects
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Selected Projects
                <span className="text-[var(--text-secondary)]">.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                A collection of applications and experiments built
                with modern technologies, covering frontend,
                backend, databases and AI.
              </p>
            </div>

            {/* Project Statistics */}
            <div className="flex items-center gap-7 md:pb-1">

              <div>
                <p className="text-2xl font-semibold tabular-nums">
                  {String(projects.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Total Projects
                </p>
              </div>

              <div className="h-9 w-px bg-[var(--border-color)]" />

              <div>
                <p className="text-2xl font-semibold tabular-nums">
                  {String(completedCount).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Completed
                </p>
              </div>

              <div className="h-9 w-px bg-[var(--border-color)]" />

              <div>
                <p className="text-2xl font-semibold tabular-nums">
                  {String(inProgressCount).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  In Progress
                </p>
              </div>

            </div>
          </div>
        </header>

        {/* Search & Filters */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Search */}
          <div className="w-full sm:max-w-xs">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or technologies..."
              className="w-full rounded-xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm text-[var(--text-main)] outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--text-secondary)]"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">

            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 sm:text-sm ${
                  activeFilter === filter
                    ? "bg-[var(--text-main)] text-[var(--bg-main)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-main)]"
                }`}
              >
                {filter}
                {filter === "All" && (
                  <span className="ml-2 opacity-60">
                    {projects.length}
                  </span>
                )}
              </button>
            ))}

          </div>
        </div>

        {/* Results Information */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs text-[var(--text-secondary)]">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>

          {(searchQuery || activeFilter !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
              className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-main)]"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-10">

            {filteredProjects.map((project) => {
              const originalIndex = projects.findIndex(
                (item) => item.id === project.id
              );

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={originalIndex}
                />
              );
            })}

          </div>
        ) : (
          /* Empty Search State */
          <div className="flex min-h-[280px] flex-col items-center justify-center text-center">

            <h3 className="text-xl font-semibold">
              No projects found.
            </h3>

            <p className="mt-2 max-w-sm text-sm text-[var(--text-secondary)]">
              Try another project name, technology or filter.
            </p>

            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
              className="mt-5 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Clear search
            </button>

          </div>
        )}

      </section>
    </main>
  );
}

export default ProjectsPage;
