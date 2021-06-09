import React from 'react';
import Home from "#root/components/pages/Home";
import Contact from "#root/components/pages/Contact";
import About from "#root/components/pages/About";
import Work from "#root/components/pages/Work";
import ErrorPage from "#root/components/pages/404";
import Globalstyle from "#root/components/Globalstyle/";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  {CompanyNameProvider, NavbarStateProvider} from '#root/context/';

const App = () => {
    const [name, setName] = React.useState('Tech Chu');
    return (
        <CompanyNameProvider name={name} setName={setName}>
            <NavbarStateProvider>
                <Globalstyle />    
                <Router>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/contact">
                            <Contact />
                        </Route>

                        <Route path="/work">
                            <Work />
                        </Route>

                        <Route exact path="/">
                            <Home />
                        </Route>
                        
                        <Route path="*">
                            <ErrorPage />
                        </Route>
                    </Switch>
                </Router>
            </NavbarStateProvider>
        </CompanyNameProvider>
    )
}

export default App
