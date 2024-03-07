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

const AddressData = ({ form }: formInterface) => {
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

export default AddressData;
