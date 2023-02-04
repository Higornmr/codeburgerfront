import React from "react";

import { Container } from "./styles";
import Orders from "./Oders";
import { SideMenuAdmin } from "../../components";
import ListProducts from "./ListProducts";

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      {/* <Orders /> */}
      <ListProducts />
    </Container>
  );
}
