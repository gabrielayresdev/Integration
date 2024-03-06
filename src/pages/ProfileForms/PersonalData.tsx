import React from "react";
import { Form } from "../../styles/formStyles";
import { Controller, UseFormReturn } from "react-hook-form";
import Input from "../../components/Input/Input";

interface formInterface {
  form: UseFormReturn<
    {
      name: string;
      lastName: string;
      email: string;
      cpf: string;
      phone: string;
      password: string;
      birthDate: string;
      cep: string;
      state: string;
      city: string;
      neighborhood: string;
      street: string;
      houseNumber: string;
      imgUrl: null;
      addressSuplement: string;
    },
    any,
    {
      name: string;
      lastName: string;
      email: string;
      cpf: string;
      phone: string;
      password: string;
      birthDate: string;
      cep: string;
      state: string;
      city: string;
      neighborhood: string;
      street: string;
      houseNumber: string;
      imgUrl: null;
      addressSuplement: string;
    }
  >;
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
            placeholder="email@example.com"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label="Email"
            error={errors.email}
          />
        )}
        rules={{
          required: "Preencha o campo",
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: "Use um email válido",
          },
        }}
        name="email"
      />
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
    </Form>
  );
};

export default PersonalData;
