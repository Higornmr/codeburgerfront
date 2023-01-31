import styled from "styled-components";
import ReactSelect from "react-select";

export const Container = styled.div`
  background: #e5e5e5;
  min-height: 100vh;
  padding: 20px;
`;

export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`;

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`;
