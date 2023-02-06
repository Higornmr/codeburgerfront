import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { useForm } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import api from "../../../services/api";

import { Container, Label, Input, ButtonStyled, LabelUpload } from "./styles";

function NewProduct() {
  const [fileName, setFileName] = useState(null);
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

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregue a imagem do produto
            </>
          )}

          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register("file")}
            onChange={(value) => {
              setFileName(value.target.files[0].name);
            }}
          />
        </LabelUpload>

        <ReactSelect />

        <ButtonStyled>Adicionar Produto</ButtonStyled>
      </form>
    </Container>
  );
}

export default NewProduct;
