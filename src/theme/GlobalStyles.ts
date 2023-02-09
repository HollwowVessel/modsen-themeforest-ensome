import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap');
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
        font-family: 'Open Sans', sans-serif;
    }
    a{
        font-family: 'Manrope', sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Manrope', sans-serif;
        
    }
    ul{
        list-style-type: none;
    }
    body{
        max-width: 1920px;
        margin: 0 auto;
        padding: 0;

        @media (max-width: 1000px){
            overflow-x: hidden;
        }
    }

`;
