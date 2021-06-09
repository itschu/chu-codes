import React, { useContext } from 'react';
import Navbar from "#root/components/layouts/Navbar/";
import Footer from "#root/components/layouts/Footer/";
import Hero from "#root/components/layouts/Hero";
import Objective from "#root/components/layouts/Objective";
import Helping from "#root/components/layouts/Helping";
import {useCompanyContext} from '#root/context/';


const Home = () => {
    const {name} = useCompanyContext();
    document.title = `${name} | Home`;
    
    return (
        <>
            <Navbar />
            <Footer />
            <Hero />
            <Objective />
            <Helping />
        </>
    )
}

export default Home;
