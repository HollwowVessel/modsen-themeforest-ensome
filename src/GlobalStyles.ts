import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    p, h1, h2,h3,h4,h5,h6{
        letter-spacing: -0.015em;
        font-style: normal; 
    }
    p{
        font-family: 'Open Sans';
    }
    h1, h2,h3,h4,h5,h6{
        font-family: 'Manrope';
    }
    ul{
        list-style-type: none;
    }
    body{
        max-width: 1920px;
        margin: 0 auto;
        padding: 0;
    }
`;
