import React from 'react';
import styled from 'styled-components';
import bgImage from "#root/images/bg.png";
import Heading from '#root/components/layouts/Heading';
import  {useNavbarContext} from '#root/context/';


const ObjectiveSection = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-image: linear-gradient(104.4deg, #8BC6EC 6.37%, #9599E2 100%);
    padding: 3em 0;
    padding-left: 7em;
    padding-left: ${({displayProp}) => displayProp ? "7em" : "3em" };
    padding-right: 4em;
    overflow: hidden;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    transition: padding-left 0.19s ease-in-out;

    @media (max-width: 600px) {
        padding-left: 2em;
        padding-right: 2em;
        /* grid-template-columns: 1fr; */
    }

    @media (max-width: 1150px) {
        grid-template-columns: 1fr;
    }
    
`;

const Image = styled.div`
    height: auto;
`;

const Img = styled.img`
    width: 100%;
`;

const OurObjective = styled.div`

`;

const Para = styled.p`
    font-size: clamp(0.869rem, 1.8vw, 1.07rem);
    line-height: 175%;
    text-align: justify;
    vertical-align: Top;
`;



const Objective = () => {

    const {navState} = useNavbarContext();

    return (
        <>
            <ObjectiveSection id="objective" displayProp={navState}>

                <Image>
                    <Img src={bgImage} alt=""/>
                </Image>


                <OurObjective>

                    <Heading align="left" content="<our>" />

                    <Para>
                        Quis deserunt ad minim duis Lorem laborum reprehenderit. Incididunt eu sit dolor elit duis consectetur excepteur cupidatat est ad culpa. Adipisicing laboris esse occaecat nulla minim dolor dolor ut qui. Dolor est laboris mollit elit aute non ea do velit occaecat tempor. Occaecat non esse cupidatat aliqua ullamco proident ipsum labore velit excepteur consectetur nostrud ea culpa. Deserunt proident consectetur consectetur laboris enim nulla. Enim sint reprehenderit esse reprehenderit nostrud eiusmod aliquip do quis aliquip aute id. Do ex in sit laboris eu amet id. Enim dolor adipisicing Lorem magna ut est dolor consectetur fugiat. Nostrud amet laborum cupidatat in. Consequat sit ad dolor deserunt aliqua duis proident. Ea nisi aliquip enim eiusmod non consequat magna duis cupidatat non in. Minim in est id excepteur incididunt sit veniam cupidatat ea quis aliquip enim. Culpa ea minim est est ex deserunt veniam magna eu aliqua magna ex 
                    </Para>

                    <Heading align="right" content="</objective>" />

                </OurObjective>

            </ObjectiveSection>
        </>
    )
}

export default Objective;
