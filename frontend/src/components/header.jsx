import "../index.css"

function Header(){
    return(
      <header className="outerNav">
      <nav className="nav-bar" >
        <span className="nav-logo">yousuf.dev</span>
        <ul className="nav-anchor">
            <li><a href="#home">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>  
      </header>
    );
}

export default Header;