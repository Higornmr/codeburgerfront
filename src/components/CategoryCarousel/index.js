import React, { useEffect } from "react";

import Category from "../../assets/CATEGORIAS.png";

import { Container, CategoryImg } from "./styles";
import api from "../../services/api";

function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("categories");

      console.log(response);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <CategoryImg src={Category} alt="Logo da categoria" />
    </Container>
  );
}

export default CategoryCarousel;
