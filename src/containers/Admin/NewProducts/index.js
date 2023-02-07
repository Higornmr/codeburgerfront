import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { useForm, Controller } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../../services/api";

import { Container, Label, Input, ButtonStyled, LabelUpload } from "./styles";
import { ErrorMessage } from "../../../components";

function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const schema = Yup.object().shape({
    name: Yup.string().required("Digite o nome do produto"),
    price: Yup.string().required("Digite o preçõ do produto"),
    category: Yup.object().required("Escolha uma categoria"),
    file: Yup.mixed()
      .test("required", "Carregue um arquivo", (value) => {
        return value?.length > 0;
      })
      .test("filesize", "Carregue arquivos de até 2mb", (value) => {
        return value[0]?.size <= 2000000;
      })
      .test("type", "Carregue apenas arquivos JPEG, ou PNG", (value) => {
        return (
          value[0]?.type === "image/jpeg" || value[0]?.type === "image.png"
        );
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
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
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Categoria"
                />
              );
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <ButtonStyled>Adicionar Produto</ButtonStyled>
      </form>
    </Container>
  );
}

export default NewProduct;
