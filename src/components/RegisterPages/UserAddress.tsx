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
      {/* <Header>
        <Title>Create Account</Title>
        <Paragraph>Get started.</Paragraph>
        <Paragraph>Fill the form and begin to look for new books.</Paragraph>
      </Header> */}
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="00000-00"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="CEP"
              error={errors.CEP}
              mask={{ type: "custom", options: { mask: "99999-999" } }}
            />
          )}
          rules={{
            required: "Campo necessário",
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
              placeholder="Digite seu bairro"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Estado"
              error={errors.estado}
            />
          )}
          rules={{
            required: "Campo necessário",
          }}
          name="estado"
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
              error={errors.numero}
            />
          )}
          rules={{
            required: "Campo necessário",
          }}
          name="numero"
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
              error={errors.complemento}
            />
          )}
          name="complemento"
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
