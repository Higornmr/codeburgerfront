import React, { useEffect, useState } from "react";
import ProductsLogo from "../../assets/products-logo.svg";
import formatCurrency from "../../utils/formatCurrency";

import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoryMenu,
  ProductsContainer,
} from "./styles";

import api from "../../services/api";
import CardProduct from "../../components/CardProducts";

function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState([0]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      const newCategories = [{ id: 0, name: "Todas" }, ...data];
      setCategories(newCategories);
    }

    async function loadsProducts() {
      const { data: allProducts } = await api.get("products");

      const newProducts = allProducts.map((products) => {
        return { ...products, formatedPrice: formatCurrency(products.price) };
      });

      setProducts(newProducts);
    }

    loadsProducts();
    loadCategories();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setfilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      );
      setfilteredProducts(newFilteredProducts);
    }
  }, [activeCategory, products]);
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
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  );
}

export default Products;
