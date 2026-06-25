import "../index.css";
import weatherApp from "../assets/photos/weatherApp.png";
import Ecommerce from "../assets/photos/basicEcommerce.png";

const projects = [
  {
    id: 1,
    name: "basic-ecommerce",
    image: Ecommerce,
    description: "prototype of ecommerce using ejs, node, express, postrgres.",
    github: "https://github.com/Yousuf-yk/basic_ecommerce.git"
  },
  {
    id: 2,
    name: "weather-app",
    image:  weatherApp,
    description: "Displays real-time weather information.",
    github: "https://github.com/Yousuf-yk/weather-app.git"
  },
]
function Projects() {
    return (
        <section className="projects-section" id="project">
            <h2 className="project-title">project</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    
                    <div className="projects-card" key={project.id} >
                        <img 
                        src={project.image}
                        alt={project.name}
                        className="project-img"
                        />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
              View Code
            </a>
                    </div>

                ))}
            </div>
        </section>
    );
}

export default Projects;