import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Open Sans Condensed", sans-serif;
    box-sizing: border-box;
    
  }

  body {
    padding: 20px 60px;
    @media screen and (max-width:800px){
      padding:10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
