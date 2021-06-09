import React from 'react';
import styled from 'styled-components';

const GenericHeading = styled.h2`
    font-family: 'Catamaran', sans-serif;
    font-weight: 900;
    text-align: ${(props)=> props.align}; 
    font-size: clamp(2rem, 6vw, 4rem);
    color: ${(props)=> props.color}; 

    &::before{
        content: "${props=>props.before}";
    }
    &::after{
        content: "${props=>props.after}";
    }
`;

const Heading = ({before, after, content, align, color}) => {
    return (
        <GenericHeading after={after} before={before}  align={align} color={color}>
            {content}
        </GenericHeading>
    )
}

export default Heading;
