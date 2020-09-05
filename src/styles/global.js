import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    button,
    input{
        outline: 0;
        border: none;
    }
    button{
        cursor: pointer;
    }
    body{
        font-family: 'Roboto', sans-serif;
    }
`;
