import React from "react";

import HomeLogo from "../../assets/home-logo.svg";
import CategoryCarousel from "../../components/CategoryCarousel";
import OffersCarousel from "../../components/OffersCarousel";

import { Container, HomeImg } from "./styles";

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="Logo da Home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}

export default Home;
