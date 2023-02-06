import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { useForm } from "react-hook-form";

import api from "../../../services/api";

import { Container, Label, Input, ButtonStyled } from "./styles";

function NewProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products");
    }

    loadOrders();
  }, []);

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register("name")} />

        <Label>Preço</Label>
        <Input type="number" {...register("price")} />

        <Label>Upload</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />

        <ButtonStyled>Adicionar Produto</ButtonStyled>
      </form>
    </Container>
  );
}

export default NewProduct;
