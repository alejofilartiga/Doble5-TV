import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* *{
  border: 1px solid red;   

} */

  *{
    user-select: none;
  }



    html{
      scroll-behavior: smooth;
    }

    body {
    margin: 0;
    padding: 0;
    font-family: "Outfit", serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    background: rgb(0,36,255);
    background: radial-gradient(circle, rgba(0,36,255,1) 0%, rgba(0,0,0,1) 0%, rgba(0,22,255,1) 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    }

    a {
    text-decoration: none;
    color: white;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;