import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
    background-color: ${theme.colors.background};
    width: 100%;    
    min-height: 100vh;
    }

`;

export default GlobalStyled;
