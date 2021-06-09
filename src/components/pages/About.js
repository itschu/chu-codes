import React from 'react';
import AboutContent from "#root/components/layouts/AboutContent/";
import Navbar from "#root/components/layouts/Navbar/";
import Footer from "#root/components/layouts/Footer/";
import {useCompanyContext, useNavbarContext} from '#root/context/';



const About = () => {

    const {name} = useCompanyContext();
    const {navState} = useNavbarContext();

    document.title = `About Us | ${name}`;
    return (
        <>
            <Navbar />
            <Footer />
            <AboutContent displayProp={navState} />
        </>
    )
}

export default About
