import React from "react";
import listLink from "./menu-list";

import { Container, ItemContainer, ListLink } from "./styles";

export function SideMenuAdmin() {
  return (
    <Container>
      <hr></hr>
      {listLink.map((item) => (
        <ItemContainer key={item.id}>
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
    </Container>
  );
}
