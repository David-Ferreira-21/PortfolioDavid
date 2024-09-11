import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import Header from "../../components/header/header.jsx";
import About from "../../components/about/about.jsx";
import Work from "../../components/works/works.jsx";
import ContactMe from "../../components/contact-me/contact-me.jsx";
import FormContact from "../../components/form-contact/form-contact.jsx";
import Footer from '../../components/footer/footer.jsx';
import images from "../../styles/images.js";

function Home() {
    const navigate = useNavigate();
    return (<>
        <Navbar />
        <Header />
        <About />
        <Work />
        <ContactMe />
        <FormContact />
        <Footer />
    </>)
}

export default Home;