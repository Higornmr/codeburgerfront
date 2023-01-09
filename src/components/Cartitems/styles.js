import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  padding: 10px;
  width: max-content;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border: 1px solid #b5b5b5;
  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  padding: 10px;
  grid-gap: 10px 15px;

  img {
    border-radius: 10px;
    width: 120px;
    height: 120px;
  }

  p {
    font-size: 16px;
    color: #000;
  }
`;

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;
