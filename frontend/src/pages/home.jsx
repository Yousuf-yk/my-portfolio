import "../index.css"
import yousufImg from "../assets/photos/yousufimg.jpeg";

function Home(){
    return(
        <section className="hero-section" id="home">
            {/* <div className="hero-image">
                <img src={yousufImg} alt="my image" />
            </div> */}
            <div className="hero-content">
                <h1 className="my-name">hi, i'm yousuf <button className="open-work-btn"><span className="status-dot"></span>Open to work</button></h1>
                <h2 className="my-role">Full stack web developer</h2>
                <h3 className="stack-used">Building modern, responsive, and scalable web applications with the PERN stack.
                    Focused on clean APIs, efficient database design, and intuitive user experiences.</h3>
                <h3 className="stack-used">Passionate About Clean Code, API Design & User Experience</h3>
                <h3 className="stack-used">Clean Code. Modern Design. Reliable Performance.</h3>
            </div>
        </section>
    )
}

export default Home;