import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === '#home-section') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"} id="navbar">
      <nav className="navbar-nav">
        <img className="navbar-logo" src={logo} height={"25px"} width={"150px"} alt="Parnasoft logo"></img>
        <div>
          <a href="#home-section" onClick={(e) => scrollToSection(e, '#home-section')} className="nav-item">Home</a>
          <a href="#about-section" onClick={(e) => scrollToSection(e, '#about-section')} className="nav-item">About</a>
          <a href="#services-section" onClick={(e) => scrollToSection(e, '#services-section')} className="nav-item">Services</a>
          <a href="#contact-section" onClick={(e) => scrollToSection(e, '#contact-section')} className="nav-item">Contact</a> {/* Updated for Contact */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
