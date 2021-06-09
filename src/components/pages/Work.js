import React from 'react';
import Navbar from '#root/components/layouts/Navbar';
import Footer from '#root/components/layouts/Footer';
import {useCompanyContext} from '#root/context/';
import WorkContent from '#root/components/layouts/WorkContent';

const Work = () => {
    const {name} = useCompanyContext();
    document.title = `Our Work | ${name}`;

    return (
        <>
            <Navbar />
            <Footer />
            <WorkContent />
        </>
    )
}

export default Work
