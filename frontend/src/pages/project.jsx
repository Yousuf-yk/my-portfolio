import "../index.css";
import weatherApp from "../assets/photos/weatherApp.png";
import Ecommerce from "../assets/photos/basicEcommerce.png";

const projects = [
  {
    id: 1,
    name: "basic-ecommerce",
    image: Ecommerce,
    description: "prototype of ecommerce using ejs, node, express, postgres.",
    github: "https://github.com/Yousuf-yk/basic_ecommerce.git",
    live: "#", // Add your deployed link here
    techStack: ["Node", "Express", "Postgres"],
    status: "Completed"
  },
  {
    id: 2,
    name: "weather-app",
    image: weatherApp,
    description: "Displays real-time weather information.",
    github: "https://github.com/Yousuf-yk/weather-app.git",
    live: "#", // Add your deployed link here
    techStack: ["React", "API"],
    status: "Completed"
  },
];

function Projects() {
  return (
    <section className="projects-section" id="project">
      <h2 className="project-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="projects-card" key={project.id}>
            <img src={project.image} alt={project.name} className="project-img" />
            
            <div className="card-content">
              {/* Header: Title and Links */}
              <div className="card-header">
                <h3>{project.name}</h3>
                <div className="card-links">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="card-description">{project.description}</p>

              {/* Footer: Tech Stack and Status Badge */}
              <div className="card-footer">
                <p className="tech-label">TECH-STACK</p>
                <div className="tech-bottom">
                  <div className="tech-icons">
                    {/* Placeholder circles for tech icons. You can replace the text with actual <img src={...}/> of the tech logos later */}
                    {project.techStack.map((tech, index) => (
                      <div className="tech-circle" key={index} title={tech}>
                        {tech.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <div className="status-badge">
                    <span className="status-dot"></span>
                    {project.status}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;