import React from "react";

import { Container, Limit, Text, Input, Caixa, } from "./styles";

import Nav from "../../components/navbar";

function home() {
  return (
    <>
      <Container className="background">
        <Nav />
        <Limit>
          <Text>
            <h1>100% diversão</h1>
            <h1>R$1,90 nos primeiros 30 dias.</h1>
            <p>Assista onde quiser. Cancele quando quiser.</p>
            <a>
              Pronto para assistir ? Informe seu email para criar ou reiniciar
              sua assinatura.
            </a>
            <Caixa>
                <Input placeholder="Email"/>
                <p>Experimente já por R$ 1,90</p>
            </Caixa>
            <a>Esta oferta está disponível somente para não assinantes.</a>
          </Text>
        </Limit>
      </Container>
    </>
  );
}

export default home;
