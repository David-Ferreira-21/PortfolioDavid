import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import images from "../../styles/images.js";
import "./about.css";

const About = () => {
    return (<>
        <section className="about-us">
            <div className="about-us-content">
                <div className="about-us-image">
                <img className="icon" src={images.aboutUs} />
                </div>
                <div className="about-us-text">
                    <h2>About <span className="highlight">Me</span></h2>
                    <p>
                        Hello! I'm David Ferreira da Silva. I’m a web developer, and I’m very passionate
                        and dedicated to my work. With 3 years of experience as a professional web developer,
                        I have worked on various projects where I gained the skills, experience,
                        and knowledge needed to make your project a success. I enjoy every step of the
                        design process, from discussion to collaboration.
                    </p>
                    <ul className="service-list">
                        <li>
                        <FontAwesomeIcon icon={faArrowRight} className="icon" /> Web Development
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faArrowRight} className="icon" /> Mobile Development
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faArrowRight} className="icon" /> Software Development
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faArrowRight} className="icon" /> Landing Pages
                        </li>
                    </ul>
                    <a href="#" className="download-btn" download>Download CV</a>
                </div>
            </div>
        </section>
    </>)
}

export default About;