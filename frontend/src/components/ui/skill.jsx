import React from "react";

function Skills() {
    const frontendSkills = [
        { name: "HTML5", src: "/svg/HTML5.svg", hoverColor: "#E34F26" },
        { name: "CSS3", src: "/svg/CSS3.svg", hoverColor: "#1572B6" },
        { name: "JavaScript", src: "/svg/JavaScript.svg", hoverColor: "#F7DF1E" },
        { name: "React", src: "/svg/React.svg", hoverColor: "#61DAFB" },
        { name: "jQuery", src: "/svg/jQuery.svg", hoverColor: "#0769AD" },
        { name: "Bootstrap", src: "/svg/bootstrap.svg", hoverColor: "#7952B3" },
        { name: "Tailwind", src: "/svg/tailwind.svg", hoverColor: "#06B6D4" },
    ];

    const backendSkills = [
        { name: "Node.js", src: "/svg/Node.js.svg", hoverColor: "#339933" },
        { name: "Express", src: "/svg/Express.svg", hoverColor: "#444444", darkIcon: true },
        { name: "MySQL", src: "/svg/MySQL.svg", hoverColor: "#4479A1" },
        { name: "PostgreSQL", src: "/svg/PostgresSQL.svg", hoverColor: "#336791" },
        { name: "JWT", src: "/svg/jwt.svg", hoverColor: "#8B5CF6" },
    ];

    const languages = [
        { name: "JavaScript", src: "/svg/JavaScript.svg", hoverColor: "#F7DF1E" },
        { name: "Python", src: "/svg/Python.svg", hoverColor: "#3776AB" },
    ];

    const tools = [
        { name: "Git", src: "/svg/Git.svg", hoverColor: "#F05032" },
        { name: "GitHub", src: "/svg/GitHub.svg", hoverColor: "#24292F", darkIcon: true },
        { name: "VS Code", src: "/svg/vscode.svg", hoverColor: "#007ACC" },
        { name: "Postman", src: "/svg/Postman.svg", hoverColor: "#FF6C37" },
        { name: "ChatGPT", src: "/svg/chatgpt.svg", hoverColor: "#10A37F",  darkIcon: true },
        { name: "npm", src: "/svg/npm.svg", hoverColor: "#CB3837" },
        { name: "Vercel", src: "/svg/vercel.svg", hoverColor: "#111827", darkIcon: true },
        { name: "Nodemon", src: "/svg/nodemon.svg", hoverColor: "#76D04B" },
    ];

    const learning = [
        { name: "MongoDB", src: "/svg/mongodb.svg", hoverColor: "#008000" },
        { name: "AWS", src: "/svg/aws.svg", hoverColor: "#FF9900" },
        { name: "Docker", src: "/svg/docker.svg", hoverColor: "#2496ED" },
        { name: "TypeScript", src: "/svg/typescript.svg", hoverColor: "#3178C6" },
    ];

    const categories = [
        {
            title: "Frontend",
            description: "Interfaces & user experiences",
            skills: frontendSkills,
            number: "01",
            size: "lg:col-span-7",
        },
        {
            title: "Backend",
            description: "APIs & server-side development",
            skills: backendSkills,
            number: "02",
            size: "lg:col-span-5",
        },
        {
            title: "Tools & workflow",
            description: "Development workflow",
            skills: tools,
            number: "03",
            size: "lg:col-span-7",
        },
        {
            title: "Languages",
            description: "Programming fundamentals",
            skills: languages,
            number: "04",
            size: "lg:col-span-5",
        },
    ];

    const SkillPill = ({ skill }) => (
        <div
            className="group flex w-fit cursor-default items-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] px-2.5 py-2 transition-all duration-300 hover:-translate-y-0.5"
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = skill.hoverColor;
                e.currentTarget.style.backgroundColor = `${skill.hoverColor}12`;
                e.currentTarget.style.boxShadow = `0 6px 20px ${skill.hoverColor}22`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.backgroundColor = "var(--bg-main)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                <img
                    src={skill.src}
                    alt={skill.name}
                    className={`h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110 ${
                        skill.darkIcon ? "dark:invert dark:brightness-200" : ""
                    }`}
                />
            </span>

            <span className="text-[11px] font-medium text-[var(--text-main)] sm:text-xs">
                {skill.name}
            </span>
        </div>
    );

    return (
        <section
            id="skills"
            className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-14"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-32 -top-28 h-72 w-72 rounded-full bg-emerald-500/[0.035] blur-3xl" />
                <div className="absolute -bottom-32 -right-28 h-72 w-72 rounded-full bg-sky-500/[0.025] blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-7 flex flex-col gap-3 border-b border-[var(--border-color)] pb-6 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600 sm:text-[11px]">
                                Expertise
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-[var(--text-main)] sm:text-4xl lg:text-[40px]">
                            Skills & technologies
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                            The stack I use to build modern full-stack applications.
                        </p>
                    </div>

                    <span className="hidden pb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)] sm:block">
                        Full-stack development
                    </span>
                </div>

                {/* =========================================================
                    COMPACT BENTO GRID
                    Uses the available width instead of creating tall cards.
                ========================================================= */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className={`group/card ${category.size} rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 shadow-sm transition-all duration-300 hover:border-emerald-300/50 hover:shadow-md sm:p-5`}
                        >
                            {/* Category header */}
                            <div className="mb-3 flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-base font-semibold text-[var(--text-main)] sm:text-lg">
                                            {category.title}
                                        </h3>

                                        <span className="text-[9px] font-semibold tracking-wider text-[var(--text-secondary)] opacity-50">
                                            {category.number}
                                        </span>
                                    </div>

                                    <p className="mt-0.5 text-[10px] text-[var(--text-secondary)] sm:text-[11px]">
                                        {category.description}
                                    </p>
                                </div>

                                <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 sm:block" />
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {category.skills.map((skill) => (
                                    <SkillPill key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* =========================================================
                    CURRENTLY LEARNING
                ========================================================= */}
                <div className="mt-3 rounded-2xl border border-dashed border-emerald-300/50 bg-emerald-500/[0.025] px-4 py-3.5 sm:mt-4 sm:px-5 sm:py-4">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex min-w-0 items-center gap-3">
                            <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                            </span>

                            <div className="min-w-0">
                                <h3 className="text-sm font-semibold text-[var(--text-main)]">
                                    Currently learning
                                </h3>

                                <p className="mt-0.5 text-[10px] text-[var(--text-secondary)] sm:text-[11px]">
                                    Expanding my stack and strengthening engineering fundamentals.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:justify-end">
                            {learning.map((skill) => (
                                <SkillPill key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Small footer line */}
                <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.14em] text-[var(--text-secondary)] opacity-60 sm:text-[10px]">
                    <span>Frontend • Backend • Workflow</span>
                    <span className="hidden sm:block">Build • Ship • Learn</span>
                </div>
            </div>
        </section>
    );
}

export default Skills;
