import React from "react";

import {
    Container, Entrar, 
} from './styles';

import Logo from '../../assets/netflix-logo.png';

function Index() {
  return (
      <>
        <Container>
            <img src={Logo} alt="Netflix" />
            
            <Entrar>Entrar</Entrar>
        </Container>
      </>   
  )
}

export default Index;
