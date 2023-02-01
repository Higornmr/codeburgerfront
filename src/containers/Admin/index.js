import React from "react";

import { Container } from "./styles";
import Orders from "./Oders";
import { SideMenuAdmin } from "../../components";

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <Orders />
    </Container>
  );
}
