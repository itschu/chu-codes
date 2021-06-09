import React from 'react';
import Navbar from '#root/components/layouts/Navbar';
import Footer from '#root/components/layouts/Footer';
import {useCompanyContext} from '#root/context/';
import ContactContent from '#root/components/layouts/ContactContent'

const Contact = () => {
    const {name} = useCompanyContext();
    document.title = `Contact Us | ${name}`;

    return (
        <>
            <Navbar />
            <Footer />
            <ContactContent />
        </>
    )
}

export default Contact;
