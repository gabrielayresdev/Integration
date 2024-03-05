import React from "react";
import {
  RegisterDataInterface,
  useRegisterContext,
} from "../../contexts/RegisterContext";
import { Form, ButtonsContainer } from "../../styles/formStyles";
import { Controller } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from "axios";
import userService from "../../services/userService.ts";
import registerDataFormat from "../../utils/registerDataFormat.ts";

const UserAddress = () => {
  const {
    pagination,
    control,
    handleSubmit,
    errors,
    watch,
    getValues,
    setValue,
  } = useRegisterContext();

  const cepRef = React.useRef<string>();
  cepRef.current = watch("cep", "");

  React.useEffect(() => {
    async function getAddressData() {
      const cep = cepRef.current;
      if (cep?.length === 9) {
        const left = cep.substring(0, 5);
        const right = cep.substring(6, 9);
        const formatedCep = `${left}${right}`;
        const request = await axios.get(
          `https://viacep.com.br/ws/${formatedCep}/json`
        );
        const { data, status } = request;
        if (status === 200 && data) {
          if (getValues("state").length === 0) setValue("state", data.uf);
          if (getValues("city").length === 0) setValue("city", data.localidade);
          if (getValues("neighborhood").length === 0)
            setValue("neighborhood", data.bairro);
          if (getValues("street").length === 0)
            setValue("street", data.logradouro);
        }
      }
    }

    getAddressData();
  }, [cepRef.current]);

  const onSubmit = async (data: RegisterDataInterface) => {
    try {
      const response = await userService
        .register(registerDataFormat(data))
        .then((response) => {
          console.log(response);
          return response;
        });
      if (response?.status === 200) {
        pagination.goNext();
      }
    } catch (error) {
      console.log(error);
    }
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
        <ButtonsContainer>
          <Button text="Sign up" onClick={handleSubmit(onSubmit)} />
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

export default UserAddress;
