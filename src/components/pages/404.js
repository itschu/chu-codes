import React from 'react';
import Navbar from "#root/components/layouts/Navbar/";
import Footer from "#root/components/layouts/Footer/";
import ErroPagerContent from "#root/components/layouts/ErroPagerContent/";
import {useCompanyContext, useNavbarContext} from '#root/context/';

const ErrorPage = () => {

    const {name} = useCompanyContext();
    const {navState} = useNavbarContext();

    document.title = `Error 404 | ${name}`;

    return (
        <>
            <Navbar />
            <Footer />
            <ErroPagerContent displayProp={navState}  />
        </>
    )
}

export default ErrorPage
