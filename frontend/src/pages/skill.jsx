import "../index.css";
function Skills() {
  const frontendSkills = [
    { name: "HTML5", src: "/svg/HTML5.svg" },
    { name: "CSS3", src: "/svg/CSS3.svg" },
    { name: "JavaScript", src: "/svg/JavaScript.svg" },
    { name: "React", src: "/svg/React.svg" },
    { name: "jQuery", src: "/svg/jQuery.svg" },
  ];

  const backendSkills = [
    { name: "Node.js", src: "/svg/Node.js.svg" },
    { name: "Express", src: "/svg/Express.svg" },
  ];

  const databaseSkills = [
    { name: "MySQL", src: "/svg/MySQL.svg" },
    { name: "PostgreSQL", src: "/svg/PostgresSQL.svg" },
  ];

  const programmingSkills = [
    { name: "JavaScript", src: "/svg/JavaScript.svg" },
    { name: "Python", src: "/svg/Python.svg" },
  ];

  const toolsSkills = [
    { name: "Git", src: "/svg/Git.svg" },
    { name: "GitHub", src: "/svg/GitHub.svg" },
    { name: "VS Code", src: "/svg/vscode.svg" },
    { name: "Postman", src: "/svg/Postman.svg" },
  ];

  return (
    <>
      <h1 className="skills">Skills</h1>
      <section className="skills-section" id="skill">
      <div className="skill-left">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            {frontendSkills.map((skill) => (
              <li key={skill.name}>
                <img
                  src={skill.src}
                  alt={skill.name}
                  title={skill.name}
                  className="skill-icon"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            {backendSkills.map((skill) => (
              <li key={skill.name}>
                <img
                  src={skill.src}
                  alt={skill.name}
                  title={skill.name}
                  className="skill-icon"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Database</h3>
          <ul>
            {databaseSkills.map((skill) => (
              <li key={skill.name}>
                <img
                  src={skill.src}
                  alt={skill.name}
                  title={skill.name}
                  className="skill-icon"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            {programmingSkills.map((skill) => (
              <li key={skill.name}>
                <img
                  src={skill.src}
                  alt={skill.name}
                  title={skill.name}
                  className="skill-icon"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <ul>
            {toolsSkills.map((skill) => (
              <li key={skill.name}>
                <img
                  src={skill.src}
                  alt={skill.name}
                  title={skill.name}
                  className="skill-icon"
                />
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div className="skill-right">
          <div className="skill-right-box">
            <ol className="core-subject-list">
              <h4>Core subject</h4>
              <li>DBMS</li>
              <li>Computer network</li>
              <li>Operating system</li>
            </ol>
          </div>
          <div className="skill-right-box">2</div>
          <div className="skill-right-box">3</div>
          <div className="skill-right-box">4</div>
        </div>
      </section>
    </>
  );
}

export default Skills;