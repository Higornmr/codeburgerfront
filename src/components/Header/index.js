import React from "react";

import Person from "../../assets/person.svg";
import Cart from "../../assets/cart.svg";

import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  Line,
  PageLinkExit,
} from "./styles";

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, Higor</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
