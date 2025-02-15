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
    --sb-track-color: #ffffff;
    --sb-thumb-color: #190050;
    --sb-size: 16px;

    &&-webkit-scrollbar {
      width: var(--sb-size)
    }

    &&-webkit-scrollbar-track {
      background: var(--sb-track-color);
      border-radius: 1px;
    }

    }

  body::-webkit-scrollbar {
    width: var(--sb-size)
  }

  body::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 1px;
    .scrollbar {
  }

    @supports not selector(::-webkit-scrollbar) {
        body {
          scrollbar-color: var(--sb-thumb-color)
                          var(--sb-track-color);
        }
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
}
`;