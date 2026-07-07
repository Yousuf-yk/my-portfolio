import "../index.css"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function Home(){
    return(
        <section className="hero-section section" id="home">
            <div className="hero-content">
                    <h1 className="my-name">hi, i'm yousuf </h1>
                
                <h2 className="my-role">Full stack web developer</h2>
                <h3 className="stack-used">I develop modern web applications using the PERN stack,
                    combining responsive frontend design with robust backend architecture.
                    My focus is on writing maintainable code, building efficient APIs,
                    and delivering fast, user-friendly digital experiences.
                </h3>
                <div className="social-buttons">
                <a href="www.linkedin.com/in/yousuf-khan06" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <FaLinkedin className="icon" />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Yousuf-yk" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <FaGithub className="icon" />
                    <span>GitHub</span>
                </a>
                <a href="https://x.com/yousufKhan_20" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <FaXTwitter className="icon" />
                    <span>X</span>
                </a> 
            </div>
                <div className="nameAndStatus-dot" >
                    <button className="open-work-btn"><span className="status-dot"></span>Available for freelance</button>
                </div>
            </div>
            
        </section>
    )
}

export default Home;