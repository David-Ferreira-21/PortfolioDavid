import { useState } from "react";
import images from "../../styles/images.js";
import "./contact-me.css";

const ContactMe = () => {
    return (<>
        <section className="contact-me">
            <div className="contact-me-content">
                <h2>I'm available for freelance work</h2>
                <a href="mailto:your.email@example.com" className="contact_button no-underline">Contact Me</a>
            </div>
        </section>
    </>)
}

export default ContactMe;