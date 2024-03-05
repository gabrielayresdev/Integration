import React from "react";
import {
  RegisterDataInterface,
  useRegisterContext,
} from "../../contexts/RegisterContext";
import {
  Header,
  Title,
  Paragraph,
  Form,
  ButtonsContainer,
} from "../../styles/formStyles";
import { Controller } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../Button/Button";

const UserData = () => {
  const { pagination, control, errors, trigger, handlePartialSubmit } =
    useRegisterContext();

  const onSubmit = () => {
    pagination.goNext();
  };

  return (
    <>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite seu nome"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.name) trigger("name");
              }}
              onBlur={onBlur}
              label="First name"
              error={errors.name}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="name"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite seu sobrenome"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.lastName) trigger("lastName");
              }}
              onBlur={onBlur}
              label="Sobrenome"
              error={errors.lastName}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="lastName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="DD/MM/YYYY"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.birthDate) trigger("birthDate");
              }}
              onBlur={onBlur}
              label="Data de nascimento"
              error={errors.birthDate}
              mask={{
                type: "datetime",
                options: {
                  format: "DD/MM/YYYY",
                },
              }}
            />
          )}
          rules={{
            required: "Preencha o campo",
            pattern: {
              value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
              message: "Data inválida",
            },
          }}
          name="birthDate"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="000.000.000-00"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.cpf) trigger("cpf");
              }}
              onBlur={onBlur}
              label="CPF"
              mask={{ type: "cpf", options: {} }}
              error={errors.cpf}
            />
          )}
          rules={{
            required: "Preencha o campo",
            pattern: {
              value:
                /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
              message: "Digite um CPF válido",
            },
          }}
          name="cpf"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="(021) 00000-0000"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.phone) trigger("phone");
              }}
              onBlur={onBlur}
              label="Phone"
              error={errors.phone}
              mask={{
                type: "cel-phone",
                options: {
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "(99) ",
                },
              }}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="phone"
        />

        <ButtonsContainer>
          <Button
            text="Sign up"
            onClick={() =>
              handlePartialSubmit(
                ["name", "lastName", "birthDate", "cpf", "phone"],
                pagination.goNext
              )
            }
          />
          <Button
            text="Go back"
            onClick={() => pagination.goBack()}
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

export default UserData;
