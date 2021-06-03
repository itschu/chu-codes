import React from 'react';
import styled from 'styled-components'
import { VscThreeBars } from 'react-icons/vsc';

const Nav = styled.nav`
    width: 4em;
    height: 100vh;
    background-color: red;
    position: fixed;
`

const Logo = styled.div`

`

const Menu = styled.div`

`

const Collapse = styled.div`

`
const Bars = styled(VscThreeBars)`

`

const Navbar = () => {
    return (
        <>
            <Nav>
                <Logo>
                    
                </Logo>

                <Menu>

                </Menu>

                <Collapse>
                    <Bars />
                </Collapse>
            </Nav>
        </>
    )
}

export default Navbar
