import styled from "styled-components";

import Background from "../../assets/background-modify.png";

export const Container = styled.div`
  background-image: url(${Background});
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 100vh;

`;

export const Limit = styled.div`
    width: 100%;
    height: 100%;
    max-width: 780px;
    margin: auto;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: brightness(100%);

`;


export const Text = styled.div`
    color: #fff;
    text-align: center;
    margin-top: 170px;
    >h1{
        font-size: 60px;
        font-weight: 700;
        padding: 10px 0;
        max-width: 730px;
    }
    >p{
        font-size: 22px;
        padding: 10px 0;
    }
    >a{
        padding: 10px 0;
    }
`;

export const Input = styled.input`
    width: 60%;
    height: 50px;
    font-size: 15px;
    padding: 10px;

    margin: 10px auto;
`;

export const Caixa = styled.div`
    width: 100%;
    margin: 10px;

    display: flex;
    justify-content: center;
    >p{
        width: 40%;
        height: 50px;
        margin: 10px auto;
        font-size: 17px;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        background: #e50914;
    }
`;

