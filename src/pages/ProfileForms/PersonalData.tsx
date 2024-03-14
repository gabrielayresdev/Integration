import React from "react";
import { Form } from "../../styles/formStyles";
import { Controller, UseFormReturn } from "react-hook-form";
import Input from "../../components/Input/Input";
import { userForm } from "../Profile/Profile";

interface formInterface {
  form: UseFormReturn<userForm, any, userForm>;
}

const PersonalData = ({ form }: formInterface) => {
  const {
    control,
    formState: { errors },
  } = form;

  return (
    <Form>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Digite seu nome"
            value={value}
            onChangeText={onChange}
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
            onChangeText={onChange}
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
            onChangeText={onChange}
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
            onChangeText={onChange}
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
            onChangeText={onChange}
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
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="00000-000"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label="CEP"
            error={errors.cep}
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
        name="cep"
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
    </Form>
  );
};

export default PersonalData;
