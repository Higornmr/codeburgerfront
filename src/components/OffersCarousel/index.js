import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import Offers from "../../assets/OFERTAS.png";

import {
  Container,
  CategoryImg,
  ContainerItems,
  Image,
  Button,
} from "./styles";
import formatCurrency from "../../utils/formatCurrency";
import api from "../../services/api";

function OffersCarousel() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get("products");

      const onlyOffers = data
        .filter((products) => products.offer)
        .map((products) => {
          return { ...products, formatedPrice: formatCurrency(products.price) };
        });

      setOffers(onlyOffers);
    }

    loadOffers();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (
    <Container>
      <CategoryImg src={Offers} alt="Logo da oferta" />

      <Carousel
        itemsToShow={5}
        style={{ width: "90%" }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map((products) => (
            <ContainerItems key={products.id}>
              <Image src={products.url} alt="foto da oferta" />
              <p>{products.name}</p>
              <p>{products.formatedPrice}</p>
              <Button>Peça agora</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}

export default OffersCarousel;
