import "../index.css";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "/images/portfolio.png",
    description: "Personal portfolio built using React."
  },
  {
    id: 2,
    name: "e-commerce",
    image: "/images/weather.png",
    description: "Displays real-time weather information."
  },
//   {
//     id: 3,
//     name: "Portfolio Website",
//     image: "/images/portfolio.png",
//     description: "Personal portfolio built using React."
//   },
//   {
//     id: 4,
//     name: "Weather App",
//     image: "/images/weather.png",
//     description: "Displays real-time weather information."
//   }
]
function Projects() {
    return (
        <section className="projects-section" id="project">
            <h2 className="project-title">project</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="projects-card" key={project.id} >
                        <img 
                        src={project.src}
                        alt={project.alt}
                        className="project-img"
                        />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;