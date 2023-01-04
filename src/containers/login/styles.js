import styled from "styled-components";
import Background from "../../assets/background-logo.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${Background}");
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

export const LoginImage = styled.img`
  height: 70%;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 24px 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 27px;
    color: #ffffff;
    text-align: center;
    margin-top: 100px;
  }

  @media (max-width: 1024px) {
    height: 70%;
    width: 90%;
    margin-bottom: 170px;
    border-radius: 10px;

    img {
      margin-top: 24px;
      height: 80px;
    }
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: #ffffff;
  margin-top: 28px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 245px;
  height: 38px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
  padding-left: 11px;
`;

export const Button = styled.button`
  width: 182.81px;
  height: 36.13px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;
  margin-top: 59px;
  margin-bottom: 25px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 1024px) {
    margin-left: 25px;
  }
`;

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    margin-left: 25px;
    margin-top: 29px;
  }
`;
