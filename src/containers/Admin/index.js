import React from "react";

import { Container } from "./styles";
import Orders from "./Oders";

export function Admin() {
  return (
    <Container>
      <h1>Admin</h1>
      <Orders />
    </Container>
  );
}