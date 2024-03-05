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
import TwoLineAnchor from "../TwoLineAnchor/TwoLineAnchor";

const UserAuth = () => {
  const { pagination, control, trigger, handlePartialSubmit, errors, watch } =
    useRegisterContext();
  const passwordRef = React.useRef<string>();
  passwordRef.current = watch("password", "");

  return (
    <>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="email@example.com"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.email) trigger("email");
              }}
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
              placeholder="••••••••••••••••••••"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.password) trigger("password");
              }}
              onBlur={onBlur}
              label="Senha"
              error={errors.password}
              secureTextEntry
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="password"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="••••••••••••••••••••"
              value={value}
              onChangeText={(text) => {
                onChange(text);
                if (errors.password2) trigger("password2");
              }}
              onBlur={onBlur}
              label="Confirmar senha"
              error={errors.password2}
              secureTextEntry
            />
          )}
          rules={{
            required: "Preencha o campo",
            validate: (value) =>
              value === passwordRef.current || "As senhas não coincidem",
          }}
          name="password2"
        />

        <ButtonsContainer>
          <Button
            text="Cadastrar"
            onClick={() =>
              handlePartialSubmit(
                ["email", "password", "password2"],
                pagination.goNext
              )
            }
          />
          <TwoLineAnchor
            firstLine="Já possui uma conta?"
            secondLine="Entre agora"
            href="login"
          />
        </ButtonsContainer>
      </Form>
      )
    </>
  );
};

export default UserAuth;
