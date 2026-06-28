import "../index.css";
import yousufImg from "../assets/photos/yousufimg.jpeg";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, triggerPageBlur } = useContext(ThemeContext);
  
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);

    triggerPageBlur(() => {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="outerNav">
      <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
        
        <div className="nav-left">
          <img src={yousufImg} className="hero-image" alt="Logo" />
        </div>

        <div className="nav-right">
          <ul className={menuOpen ? "nav-anchor active" : "nav-anchor"}>
            <li><a href="#home" onClick={(e) => handleNavClick(e, "#home")}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}>About</a></li>
            <li><a href="#project" onClick={(e) => handleNavClick(e, "#project")}>Project</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              <img
                src={theme === "classic" ? "/svg/moon.svg" : "/svg/sun.svg"}
                alt="Theme"
                className="theme-icon"
              />
            </button>
            
            
            <div
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Header;