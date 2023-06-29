import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;800&display=swap');


* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    border: none;
    line-height: 18px;
    outline: none;
    appearance: none;
    text-decoration:none;

}

body {
    background: #000000;

}

 
`

export default GlobalStyle
