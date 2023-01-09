import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #e5e5e5;
`;

export const ProductsImg = styled.img`
  width: 100%;
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    gap: 2%;
  }
`;

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && "2px solid #9758a6"};
  color: ${(props) => (props.isActiveCategory ? "#9758a6" : " #9a9a9d")};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;

  @media (max-width: 1024px) {
    font-size: 15px;
    font-weight: 900;
  }

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`;
