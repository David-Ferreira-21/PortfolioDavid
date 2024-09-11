import { useState } from "react";
import images from "../../styles/images.js";
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
    return (<>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/" className="no-underline">
                        <a className="logo">Portfólio David</a>
                    </Link>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2024 David Ferreira. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>)
}

export default Footer;