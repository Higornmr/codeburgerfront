import React from "react";
import { useHistory } from "react-router-dom";

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
  const {
    push,
    location: { pathname },
  } = useHistory();

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push("/")} isActive={pathname === "/"}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push("/produtos")}
          isActive={pathname.includes("produtos")}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push("/carrinho")}>
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