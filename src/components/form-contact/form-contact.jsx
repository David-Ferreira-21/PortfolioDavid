import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import images from "../../styles/images.js";
import "./form-contact.css";

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData); 
    };
    return (<>
        <section className="form-contact">
            <div className="form-contact-content">
                
                <div className="form-contact-text">
                    <h2>Get in <span className="highlight">Touch</span></h2>
                    <p>
                    Please fill out the form on this section to contact with me.
                    Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
                    </p>
                    <ul className="service-list-address">
                        <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> <b>Address:</b> Cotia, São Paulo, Brazil - 06720-050
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faEnvelope} className="icon" /> <b>E-mail:</b> silvaa.david97@gmail.com
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faWhatsapp} className="icon" /> <b>Whatsapp:</b> (11) 9 8869-8354
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faInstagram} className="icon" /> <b>Instagram:</b> @davidferreirasil
                        </li>
                    </ul>
                </div>
                <div className="form-contact-form">
                    {/* Formulário de contato */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                placeholder="Name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                placeholder="E-mail"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                placeholder="Message"
                                rows="5"
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </>)
}

export default FormContact;