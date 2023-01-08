import React, { useEffect, useState } from "react";

import ProductsLogo from "../../assets/products-logo.svg";

import { Container, ProductsImg, CategoryButton, CategoryMenu } from "./styles";
import api from "../../services/api";

function Products() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState([0]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      const newCategories = [{ id: 0, name: "Todas" }, ...data];
      setCategories(newCategories);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="Products Logo" />
      <CategoryMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
    </Container>
  );
}

export default Products;
