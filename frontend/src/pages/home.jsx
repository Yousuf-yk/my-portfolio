import "../index.css"
import yousufImg from "../assets/photos/yousufimg.jpeg";

function Home(){
    return(
        <section className="hero-section" id="home">
            <div className="hero-image">
                <img src={yousufImg} alt="my image" />
            </div>
            <div className="hero-content">
                <h1 className="my-name">Yousuf khan, here</h1>
                <h2 className="my-role">Full stack web developer</h2>
                <h3 className="stack-used">stack used to build this website : PERN</h3>
                <p className="my-role">I build modern, responsive and interactive, user-friendly web applicaction</p>
                <p className="my-role">well knowdlege of API's, DBMS, and UI clarity</p>
            </div>
        </section>
    )
}

export default Home;