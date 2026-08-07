import React from 'react';

function Skills() {
  const whiteIcons = ['GitHub', 'Vercel', 'Express', 'ChatGPT'];

  const frontendSkills = [
    { name: 'HTML5', src: '/svg/HTML5.svg', hoverColor: '#E34F26' },
    { name: 'CSS3', src: '/svg/CSS3.svg', hoverColor: '#1572B6' },
    { name: 'JavaScript', src: '/svg/JavaScript.svg', hoverColor: '#F7DF1E' },
    { name: 'React', src: '/svg/React.svg', hoverColor: '#61DAFB' },
    { name: 'jQuery', src: '/svg/jQuery.svg', hoverColor: '#0769AD' },
    { name: 'Bootstrap', src: '/svg/bootstrap.svg', hoverColor: '#7952B3' },
    { name: 'Tailwind', src: '/svg/tailwind.svg', hoverColor: '#06B6D4' },
  ];

  const backendSkills = [
    { name: 'Node.js', src: '/svg/Node.js.svg', hoverColor: '#339933' },
    { name: 'Express', src: '/svg/Express.svg', hoverColor: '#444444' },
    { name: 'MySQL', src: '/svg/MySQL.svg', hoverColor: '#4479A1' },
    { name: 'PostgreSQL', src: '/svg/PostgresSQL.svg', hoverColor: '#336791' },
    { name: 'JWT', src: '/svg/jwt.svg', hoverColor: '#8B5CF6' },
  ];

  const programmingSkills = [
    { name: 'JavaScript', src: '/svg/JavaScript.svg', hoverColor: '#F7DF1E' },
    { name: 'Python', src: '/svg/Python.svg', hoverColor: '#3776AB' },
  ];

  const toolsSkills = [
    { name: 'Git', src: '/svg/Git.svg', hoverColor: '#F05032' },
    { name: 'GitHub', src: '/svg/GitHub.svg', hoverColor: '#24292F' },
    { name: 'VS Code', src: '/svg/vscode.svg', hoverColor: '#007ACC' },
    { name: 'Postman', src: '/svg/Postman.svg', hoverColor: '#FF6C37' },
    { name: 'ChatGPT', src: '/svg/chatgpt.svg', hoverColor: '#10A37F' },
    { name: 'npm', src: '/svg/npm.svg', hoverColor: '#CB3837' },
    { name: 'Vercel', src: '/svg/vercel.svg', hoverColor: '#111827' },
    { name: 'Nodemon', src: '/svg/nodemon.svg', hoverColor: '#76D04B' },
  ];

  const learning = [
    { name: 'MongoDB', src: '/svg/mongodb.svg', hoverColor: '#008000' },
    { name: 'AWS', src: '/svg/aws.svg', hoverColor: '#FF9900' },
    { name: 'Docker', src: '/svg/docker.svg', hoverColor: '#2496ED' },
    { name: 'TypeScript', src: '/svg/typescript.svg', hoverColor: '#3178C6' },
  ];

  const SkillCard = ({ title, skills }) => (
    <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6">
      <h3 className="mb-5 text-xl font-semibold text-[var(--text-main)]">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-center gap-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-main)] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = skill.hoverColor;
              e.currentTarget.style.backgroundColor = skill.hoverColor + '15';
              e.currentTarget.style.boxShadow = `0 0 18px ${skill.hoverColor}55, 0 0 35px ${skill.hoverColor}25`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.backgroundColor = 'var(--bg-main)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src={skill.src}
              alt={skill.name}
              className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${
                whiteIcons.includes(skill.name) ? 'svg-invert' : ''
              }`}
            />

            <span className="text-sm font-medium text-[var(--text-main)]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="px-6 py-0 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Expertise
          </p>

          <h2 className="text-4xl font-bold text-[var(--text-main)] sm:text-5xl">
            Skills & technologies
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[var(--text-secondary)]">
            Technologies I use to build full-stack applications, APIs, and
            modern web experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
          <SkillCard title="Programming Languages" skills={programmingSkills} />
          <SkillCard title="Tools & Technologies" skills={toolsSkills} />
          <SkillCard title="Learning" skills={learning} />
        </div>
      </div>
    </section>
  );
}

export default Skills;