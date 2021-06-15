import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {VscThreeBars} from 'react-icons/vsc';
import {RiContactsFill, RiProfileLine, RiPencilRuler2Line} from 'react-icons/ri';
import menuItems from '#root/data';
import {useNavbarContext} from '#root/context/';


const Nav = styled.nav`
    width: 4.2em;
    height: 100vh;
    background-color: #000;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    z-index: 3;
    left: ${({displayProp}) => displayProp ? "0" : "-100%"};
    opacity: ${({displayProp}) => displayProp ? "1" : "0"};
    transition: left 0.35s ease-in-out;

    @media (max-width: 600px) {
        width: 100vw;
        height: 15vw;
        background-color: #000;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 7px 1em;
        z-index: 3;
        left: 0;
        top: ${({displayProp}) => displayProp ? "0" : "-100%"};
        transition: top 0.35s ease-in-out;
    }
`

const Logo = styled(Link)`
    
`

const Menu = styled.ul`
    list-style-type: none;

    @media (max-width: 600px) {
        display: flex;
    }
`

const Collapse = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`

const MenuList = styled(Link)`
    border-radius: 50%;
    display: grid;
    place-content: center;
    background-color: #fff;
    width: 2.5em;
    font-size: 1.4em;
    margin: 0.4em 0;
    border: 2px dashed #000;
    border: 0px solid #000;
    height: 2.5em;
    text-decoration: none;
    color: #000;

    @media (max-width: 600px) {
        display: none;
    }
`

const Bars = styled(VscThreeBars)`
    cursor: pointer;
    color: #fff;
    font-size: 1.5em;
`;

const LI = styled.li`
    margin: 1.5em 0;
    display: flex;
    font-size: clamp(0.8rem, 0.9vw, 0.8rem);
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        margin: 0 0.7em;
    }
`;

const Title = styled(Link)`
    color: #fff;
    text-transform: capitalize;
    font-weight: 500;
    text-decoration: none;
`;

const Navbar = () => {

    const navIcons = [<RiProfileLine />, <RiPencilRuler2Line />, <RiContactsFill/>]
    const {navState, toggleNav} = useNavbarContext();

    return (
        <Nav displayProp={navState}>
            <Logo to="/">
                <Bars />
            </Logo>
            
            <Menu>
            { 
                menuItems.map((el, i)=> (
                    <LI key={el.id} >
                        <MenuList to={el.link}> 
                            {navIcons[i]}
                        </MenuList> 
                        <Title to={el.link}> {el.title} </Title>
                    </LI>
                ))
            }
            </Menu>
            
            <Collapse>
                <Bars onClick={()=>toggleNav()} />
            </Collapse>
        </Nav>
    )
}

export default Navbar
