import React from 'react'
import styled from "styled-components";
import CTA from '#root/components/layouts/CTA';
import Heading from '#root/components/layouts/Heading';


const MainContent = styled.section`
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(105.85deg, #9FACE6 0%, #74EBD5 115.21%);
    padding: 4em 0;
    padding-left: ${({displayProp}) => displayProp? "7em" : "3em"};
    padding-right: 4em;
    display: grid;
    place-items: center;
    transition: padding-left 0.19s ease-in-out;

    @media (max-width: 600px) {
        padding-left: 2em;
        padding-right: 2em;
    }
`;

const AboutPara = styled.p`
    margin-top: 25px;
    font-size: clamp(0.869rem, 1.8vw, 1.07rem);
    line-height: 175%;
    text-align: center;
    vertical-align: Top;

    @media (max-width: 600px){
        text-align: justify;
    }
`;


const AboutContent = ({displayProp}) => {
    
    return (
        <MainContent displayProp={displayProp}>
            
            <Heading before="<" after=" />" content="about us" align="center"/>

            <AboutPara>
                Mollit deserunt excepteur consequat ut adipisicing id elit. Dolor incididunt cupidatat aliquip quis cillum est pariatur enim sit esse elit. Commodo consectetur consectetur tempor veniam veniam minim labore tempor anim id est. Consectetur minim et culpa tempor sit aliquip sit culpa dolore eiusmod in mollit aliqua velit. Dolore minim dolore cupidatat velit sunt. Veniam anim cupidatat sit consectetur cupidatat excepteur ea ea dolore dolore velit dolore. Quis consequat consequat exercitation cupidatat et cillum non tempor eu aliqua. Ut enim deserunt non occaecat aliqua et eu eiusmod aliquip officia veniam quis. Aliquip excepteur labore id exercitation tempor enim eu proident laboris laboris duis. 
            </AboutPara>

            <CTA linkTo="/contact" content="Contact Us"/>

        </MainContent>
    )
}

export default AboutContent;