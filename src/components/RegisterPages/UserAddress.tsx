import React from "react";
import {
  RegisterDataInterface,
  useRegisterContext,
} from "../../contexts/RegisterContext";
import { Form, ButtonsContainer } from "../../styles/formStyles";
import { Controller } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../Button/Button";

const UserAddress = () => {
  const { pagination, control, handleSubmit, errors, watch } =
    useRegisterContext();

  const onSubmit = (data: RegisterDataInterface) => {
    pagination.goNext();
  };

  return (
    <>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="00000-000"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="CEP"
              error={errors.CEP}
              mask={{ type: "custom", options: { mask: "99999-999" } }}
            />
          )}
          rules={{
            required: "Preencha o campo",
            pattern: {
              value: /^[0-9]{5}-[0-9]{3}$/,
              message: "Digite um CEP válido",
            },
          }}
          name="CEP"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite seu estado"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Estado"
              error={errors.state}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="state"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite sua cidade"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Cidade"
              error={errors.city}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="city"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite seu bairro"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Bairro"
              error={errors.neighborhood}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="neighborhood"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite sua rua"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Rua"
              error={errors.street}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="street"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="000"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Número"
              error={errors.houseNumber}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="houseNumber"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder=""
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Complemento"
              error={errors.addressSuplement}
            />
          )}
          name="addressSuplement"
        />
        <ButtonsContainer>
          <Button text="Sign up" onClick={handleSubmit(onSubmit)} />
          <Button
            text="Go back"
            onClick={() => {}}
            background="transparent"
            color="#33415C"
            padding="0"
          />
        </ButtonsContainer>
      </Form>
      )
    </>
  );
};

export default UserAddress;
