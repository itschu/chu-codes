import React from 'react';
import styled from 'styled-components';
import {allJobs} from "#root/data";
import CTA from '#root/components/layouts/CTA';
import  {useNavbarContext} from '#root/context/';


const HelpingSection = styled.section`
    min-height: 100vh;
    width: 100vw;
    padding: 4em 0;
    padding-left: 7em;
    padding-left: ${({displayProp}) => displayProp ? "7em" : "3em" };
    padding-right: 4em;
    background: linear-gradient(253.99deg, #A9C9FF 1.54%, #FFBBEC 103.93%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-content: center;
    grid-gap: 2em;
    transition: padding-left 0.19s ease-in-out;


    @media (max-width: 600px) {
        padding-left: 2em;
        padding-right: 2em;
    }

    @media (max-width: 1150px) {
        grid-template-columns: 1fr;
    }

`;

const Solution = styled.div`
    display: grid;
    place-items: center;
    padding-left: 2em;
    padding-right: 2em;
`;

const SolutionHeading = styled.h1`
    font-family: 'Catamaran', sans-serif;
    font-weight: 900;
    text-align: ${(props)=> props.align};
    font-size: clamp(2rem, 6vw, 4rem);
    line-height: 130%;
    width: 9em;
    margin-left: auto;

    &::before{
        content: "<";
    } 
    
    &::after{
        content: " />";
    } 
`;

const SolutionPara = styled.p`
    margin-top: 25px;
    font-size: clamp(0.869rem, 1.8vw, 1.07rem);
    line-height: 175%;
    text-align: center;
    vertical-align: Top;

    @media (max-width: 600px){
        text-align: left;
    }
`;

const AllBusinesses = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Listings = styled.div`
    align-self: ${props=> props.alignSelf};
`;

const ViewSite = styled.a`
    display: inline-block;
    text-decoration: none;
    padding: 22px 0;
    width: 30em;
    text-align: center;
    font-weight: 500;
    background-color: ${props=> props.bg};
    color: ${props=> props.color};
    margin: 15px;

    @media (max-width: 600px){
        width: 21em;
    }
`;

const Helping = () => {

    const {navState} = useNavbarContext();

    return (
        <HelpingSection  displayProp={navState}>

            <Solution>

                <SolutionHeading align="right"> We Help Businesses!!</SolutionHeading>

                <SolutionPara>
                    Cillum ad est culpa culpa. Exercitation proident in in dolor. Occaecat nostrud incididunt proident Lorem aute consectetur ipsum cillum deserunt. Culpa ad aliqua nostrud magna duis exercitation minim est irure in est cupidatat. Exercitation nostrud laboris irure sunt quis irure adipisicing commodo officia est. Sit id labore fugiat mollit minim do sint quis ea ipsum qui cillum. 
                </SolutionPara>
                
                <CTA linkTo="/contact" content="Contact Us"/>

            </Solution>
            
            <AllBusinesses>

                {
                    allJobs.map(el=>{
                        return(
                            <Listings key={el.id} alignSelf={el.align}>
                                
                                <ViewSite bg={el.bgColor} href={el.link} target={el.link === '/' ? "" : "_blank"} color={el.color} > 
                                    {el.title}
                                </ViewSite>   
                                
                            </Listings> 
                        )
                    })
                }
                

            </AllBusinesses>

        </HelpingSection>
    )
}

export default Helping
