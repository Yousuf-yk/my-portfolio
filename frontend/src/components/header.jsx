import "../index.css";
import yousufImg from "../assets/photos/yousufimg.jpeg";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, triggerPageBlur } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

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
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a href="#project" onClick={(e) => handleNavClick(e, "#project")}>
                Project
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <div className="neomorphism">
              <DarkModeSwitch
                checked={theme === "warm"}
                onChange={toggleTheme}
                size={24}
                sunColor="#ffdd00"
                moonColor="#86bbd8"
              />
            </div>

            <button 
              className="hamburger" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;