// import React from 'react';
import {createGlobalStyle} from 'styled-components'

const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body{
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
`

export default Globalstyle
