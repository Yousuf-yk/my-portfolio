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
    { name: "Express", src: "/svg/Express.svg", hoverColor: "#444444" },
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
    { name: "GitHub", src: "/svg/GitHub.svg", hoverColor: "#24292F" },
    { name: "VS Code", src: "/svg/vscode.svg", hoverColor: "#007ACC" },
    { name: "Postman", src: "/svg/Postman.svg", hoverColor: "#FF6C37" },
    { name: "ChatGPT", src: "/svg/chatgpt.svg", hoverColor: "#10A37F" },
    { name: "npm", src: "/svg/npm.svg", hoverColor: "#CB3837" },
    { name: "Vercel", src: "/svg/vercel.svg", hoverColor: "#111827" },
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
    },
    {
      title: "Backend",
      description: "APIs & server-side development",
      skills: backendSkills,
      number: "02",
    },
    {
      title: "Languages",
      description: "Programming fundamentals",
      skills: languages,
      number: "03",
    },
    {
      title: "Tools",
      description: "Development workflow",
      skills: tools,
      number: "04",
    },
  ];

  const SkillPill = ({ skill }) => {
    return (
      <div
        className="group flex cursor-default items-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] px-3 py-2 transition-all duration-300 hover:-translate-y-1"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = skill.hoverColor;
          e.currentTarget.style.backgroundColor = `${skill.hoverColor}12`;
          e.currentTarget.style.boxShadow = `0 0 18px ${skill.hoverColor}35`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-color)";
          e.currentTarget.style.backgroundColor = "var(--bg-main)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <img
          src={skill.src}
          alt={skill.name}
          className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <span className="text-xs font-medium text-[var(--text-main)] sm:text-sm">
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-150px] top-[-100px] h-80 w-80 rounded-full bg-emerald-500/[0.035] blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-100px] h-80 w-80 rounded-full bg-emerald-500/[0.025] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Expertise
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-main)] sm:text-4xl">
              Skills & technologies
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
              Tools and technologies I use to build modern full-stack
              applications.
            </p>
          </div>

          <span className="text-xs text-[var(--text-secondary)]">
            Full-stack development
          </span>
        </div>

        {/* Main skills */}
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 shadow-sm transition-all duration-300 hover:border-emerald-300/50 hover:shadow-lg sm:p-6"
            >
              {/* Category heading */}
              <div className="mb-5  flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-main)]">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    {category.description}
                  </p>
                </div>

                <span className="text-xs font-semibold text-[var(--text-secondary)] opacity-50">
                  {category.number}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-4 rounded-2xl border border-dashed border-emerald-300/50 bg-emerald-500/[0.025] p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                <h3 className="font-semibold text-[var(--text-main)]">
                  Currently learning
                </h3>
              </div>

              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Expanding my stack and strengthening engineering fundamentals.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {learning.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;