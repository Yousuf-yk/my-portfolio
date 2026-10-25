
import React from "react";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", src: "/svg/React.svg" },
        { name: "Bootstrap", src: "/svg/bootstrap.svg" },
        { name: "Tailwind", src: "/svg/tailwind.svg" },
        { name: "TypeScript", src: "/svg/typescript.svg" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", src: "/svg/Node.js.svg" },
        { name: "Express", src: "/svg/Express.svg", darkIcon: true },
        { name: "PostgreSQL", src: "/svg/PostgresSQL.svg" },
        { name: "MongoDB", src: "/svg/mongodb.svg" },
        { name: "JWT", src: "/svg/jwt.svg" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", src: "/svg/JavaScript.svg" },
        { name: "Python", src: "/svg/Python.svg" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", src: "/svg/Git.svg" },
        { name: "GitHub", src: "/svg/GitHub.svg", darkIcon: true },
        { name: "Docker", src: "/svg/docker.svg" },
        { name: "Postman", src: "/svg/Postman.svg" },
        { name: "VS Code", src: "/svg/vscode.svg" },
      ],
    },
  ];

  const learning = [
    { name: "AWS", src: "/svg/aws.svg", darkIcon: true },
  ];

  const catGif = "./gif/meowMeow.mp4";

  const SkillItem = ({ skill }) => (
    <div className="group inline-flex items-center gap-1.5 rounded-md border border-[var(--border-color)] px-2 py-1.5 transition-colors hover:border-[#B86F53]/60 hover:bg-[#B86F53]/[0.06]">
      <img
        src={skill.src}
        alt=""
        loading="lazy"
        className={`h-4 w-4 shrink-0 object-contain transition-transform group-hover:scale-110 ${
          skill.darkIcon ? "dark:invert dark:brightness-200" : ""
        }`}
      />
      <span className="text-[11px] font-medium text-[var(--text-main)] sm:text-xs">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section
      id="skills"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-5">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B86F53]">
            Expertise
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-[var(--text-main)] sm:text-3xl">
            Skills & technologies
          </h2>

          <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
            The tools and technologies I use to build full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[1.15fr_0.85fr] md:gap-5 lg:gap-7">
          {/* Mobile: cat first. Desktop: skills left. */}
          <div className="order-1 min-w-0 md:order-2">
            <div className="relative overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
              <video
                src={catGif}
                alt="Sleepy office cat taking a coffee break at a keyboard"
                loading="lazy"
                className="block h-52 w-full object-cover object-center sm:h-64 md:h-full md:min-h-[350px] lg:min-h-[390px]"
                autoPlay
                loop
                muted
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12">
                <p className="text-sm font-semibold text-white">
                  Powered by coffee ☕
                </p>
                <p className="mt-1 text-xs text-white/75">
                  Debugging one nap at a time.
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 min-w-0 md:order-1">
            <div className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className={`grid grid-cols-[76px_minmax(0,1fr)] items-start gap-2 px-2.5 py-3 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-3 sm:px-4 ${
                    index !== categories.length - 1
                      ? "border-b border-[var(--border-color)]"
                      : ""
                  }`}
                >
                  <h3 className="pt-1 text-xs font-semibold text-[var(--text-main)] sm:text-sm">
                    {category.title}
                  </h3>

                  <div className="flex min-w-0 flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-[76px_minmax(0,1fr)] items-start gap-2 border-t border-dashed border-[#B86F53]/40 bg-[#B86F53]/[0.04] px-2.5 py-3 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-3 sm:px-4">
                <h3 className="pt-1 text-xs font-semibold text-[#B86F53] sm:text-sm">
                  Learning
                </h3>

                <div className="flex min-w-0 flex-wrap gap-1.5">
                  {learning.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-2 text-right text-[9px] uppercase tracking-[0.14em] text-[var(--text-secondary)] opacity-60 sm:text-[10px]">
              Build · Ship · Learn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
