import React, { useContext, useState } from 'react';

const NavbarProvider = React.createContext();

const NavbarStateProvider = ({children}) => {
    const [navState, setNavState] = useState(true);

    const toggleNav = () =>{
        setNavState(!navState);
    };

    return (
        <NavbarProvider.Provider value={{navState, toggleNav}}>
            {children}
        </NavbarProvider.Provider>
    )
}

const useNavbarContext = () => useContext(NavbarProvider);

export {NavbarStateProvider, useNavbarContext};