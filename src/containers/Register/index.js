import React from "react";
import { useForm } from "react-hook-form";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button";
import api from "../../services/api";
import RegisterImg from "../../assets/register-image.svg";
import Logo from "../../assets/logo.svg";

import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ErrorMessage,
} from "./styles";

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("O seu nome é obrigatório"),
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O e-email é obrigatório"),
    password: Yup.string("Digite uma senha válido")
      .required("A senha é obrigatório")
      .min(6, "A senha deve ter pelo menos 6 digítos"),
    confirmPassword: Yup.string("Digite uma senha válido")
      .required("A senha é obrigatório")
      .min(6, "A senha deve ter pelo menos 6 digítos")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const response = await api.post("users", {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password,
    });

    console.log(response);
  };

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Register-image" />
      <ContainerItens>
        <img src={Logo} alt="logo-codeburger" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 15, marginBottom: 10 }}>
            Sign Up
          </Button>
        </form>
        <SignInLink>
          Já possui conta ? <a>Sign In</a>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}

export default Register;
