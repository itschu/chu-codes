import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft as RightArrow } from 'react-icons/ai';
import bgImage from "#root/images/bg.png";
import  {useNavbarContext} from '#root/context/';


const HeroSection = styled.section`
    width: 100vw;
    position: relative;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2em;
    padding-left: ${({displayProp}) => displayProp ? "2em" : "0" };
    background-image: #dcdcdc;
    transition: padding-left 0.19s ease-in-out;
    background: url(${bgImage}) center/cover;
    z-index: 1;
    overflow: hidden;
    animation: hue 10s infinite alternate;

    &::after{ 
        content: '';
        width: 100%;
        height: 100%;
        background: inherit;
        position: absolute;
        top: 0;
        left: 0;
        filter: blur(1rem);
        z-index: -1;
        transform: scale(1.15);
    }

    @keyframes hue {
        from{
            filter: hue-rotate(0);
        }
        to{
            filter: hue-rotate(360deg);
        }
    }

    /* parallax scrolling effect */
   &:after{
         content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateZ(-1px) scale(1.5);
        background-size: 100%;
        z-index: -1;
   }

    @media (max-width: 600px) {
        padding-left: 0;
    }
`;

const HeroText = styled.h1`
    text-align: center;
    font-family: 'Catamaran', sans-serif;
    font-weight: 900; 
    font-size: clamp(2rem, 5vw, 4.3rem);
    text-transform: capitalize;
    line-height: 1.22;
    color: #1d1d1d;
    color: #fff;
    animation: popping 25s ease-in-out infinite;

    @keyframes popping {
        30%  {transform: scale(0.9);}
        70%  {transform: scale(1.22);}
    }

    @media (max-width: 600px){
        @keyframes popping {
            30%  {transform: scale(0.7);}
            70%  {transform: scale(1.07);}
        }
    }
`;

const ScrollButton = styled.a`
    -ms-transform: rotate(270deg);
    transform: rotate(270deg); 
    border: 2px solid #fff;
    padding: 10px;
    border-radius: 30px;
    margin-top: 90px;
    font-size: 13px;
    position: relative;
    z-index: 1;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;

    @media (max-width: 600px){
        justify-self: flex-start;
        justify-items: flex-start;
    }
`;

const Hero = () => {

    const {navState} = useNavbarContext();

    return (
        <>
            <HeroSection id="hero" displayProp={navState}>
                <HeroText>
                    {`<We are a web and mobile app`}
                    <br/>
                    {`development agency />`}
                </HeroText>

                <ScrollButton href="#objective" >
                    <RightArrow /> &nbsp; Scroll Down
                </ScrollButton>

            </HeroSection> 
        </>
    )
}

export default Hero
