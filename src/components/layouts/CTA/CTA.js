import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const neon = "hsl(323 21% 16%);";
const textColor = "#fff";

export const ctaTemplate = `
    margin-top: 40px;
    width: auto;
    text-decoration: none;
    font-size: clamp(0.869rem, 1.8vw, 1.07rem);
    // display: inline-block;
    cursor: pointer;
    color: ${neon};
    border: ${neon} 0.125em solid;
    padding: 0.75em 1.3em;
    border-radius: 0.25em;
    z-index: 1;
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.95em currentColor;
    box-shadow: inset 0 0 0.5em 0 ${neon}, 0 0 0.5em 0 ${neon};
    position: relative;

    &::before {
        pointer-events: none;
        content: "";
        position: absolute;
        background: ${neon};
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        transform: perspective(1em) rotateX(45deg) scale(1, 0.35);
        filter: blur(1.5em);
        opacity: 0.4;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 3.3em 8em 0 ${neon};
        opacity: 0;
        background-color: ${neon};
        z-index: -1;
        transition: opacity 100ms linear;

    }

    &:hover, &:focus {
        color: ${textColor};
        font-weight: 600;
        text-shadow: none;
        transition: font-weight 250ms ease;
        outline: ${textColor};
        transform: scale(1.07);
        transition: transform 200ms ease;
    }

    &:hover::before,  &:focus::before {
        opacity: 0.3;
    }
    &:hover::after, &:focus::after {
        opacity: 1;
    }
`;

const Content = styled(Link)`
    ${ctaTemplate};
`;

const CTA = ({linkTo, content}) =>  (
        <Content to={linkTo}>
                {content}
        </Content>
);

export default CTA
