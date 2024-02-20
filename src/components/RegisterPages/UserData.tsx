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
  const { pagination, control, handleSubmit, errors, watch } =
    useRegisterContext();
  const passwordRef = React.useRef<string>();
  passwordRef.current = watch("password", "");

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

export default UserData;
