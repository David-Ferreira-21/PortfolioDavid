import { useEffect, useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) { // Ajuste o valor conforme necessário
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="no-underline">
            <a className="logo">Portfólio David</a>
        </Link>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="#home" className={location.hash === '#home' ? 'active' : ''}>Home</Link></li>
          <li><Link to="#about" className={location.hash === '#about' ? 'active' : ''}>About</Link></li>
          <li><Link to="#portfolio" className={location.hash === '#portfolio' ? 'active' : ''}>Portfolio</Link></li>
          <li><Link to="#skills" className={location.hash === '#skills' ? 'active' : ''}>Skills</Link></li>
          <li><Link to="#contact" className={location.hash === '#contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <span className="menu-icon"></span>
        </button>
    </div>
}

export default Navbar;