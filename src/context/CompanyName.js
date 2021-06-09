import React, { useContext } from 'react';

const brandContext = React.createContext();

export const CompanyNameProvider = ({children, name, setName}) => {
    return (
        <brandContext.Provider value={{name, setName}}>
            {children}
        </brandContext.Provider>
    )
}

export const useCompanyContext = () => useContext(brandContext);
