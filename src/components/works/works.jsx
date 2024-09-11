import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import images from "../../styles/images.js";
import "./works.css";

const Work = () => {
    return (<>
        <section className="work">
            <div className="work-content">
                <div className="about-us-text">
                    <h2>Selected <span className="highlight">Works</span></h2>
                    <div className="gallery-grid">
                        <img src={images.Work1} alt="Work Image 1" />
                        <img src={images.Work2} alt="Work Image 2" />
                        <img src={images.Work3} alt="Work Image 3" />
                        <img src={images.Work4} alt="Work Image 4" />
                        <img src={images.Work5} alt="Work Image 5" />
                        <img src={images.Work6} alt="Work Image 6" />
                        {/* Adicione mais imagens conforme necessário */}
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Work;