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
        element.scrollIntoView({ behavior: 'smooth' });
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
          <div className="img-logo"><img src={yousufImg} alt="my image" className="my-img" /></div>
          <span className="nav-logo">yousuf.dev</span>
        </div>
        
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        
        <ul className={menuOpen ? "nav-anchor active" : "nav-anchor"}>
          {/* Apply the blur effect to standard links */}
          <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#project" onClick={(e) => handleNavClick(e, '#project')}>Project</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          
          {/* Add a button specifically for toggling the theme */}
          <li>
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {theme === 'classic' ? '🌙 Warm Mode' : '☀️ Classic Mode'}
            </button>
          </li>
        </ul>
      </nav>  
    </header>
  );
}

export default Header;