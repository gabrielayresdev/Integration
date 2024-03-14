import React from "react";
import { Form } from "../../styles/formStyles";
import { Controller, UseFormReturn } from "react-hook-form";
import Input from "../../components/Input/Input";
import { userForm } from "../Profile/Profile";

interface formInterface {
  form: UseFormReturn<userForm, any, userForm>;
}

const AuthData = ({ form }: formInterface) => {
  const {
    control,
    formState: { errors },
    trigger,
    watch,
  } = form;
  const passwordRef = React.useRef("");
  passwordRef.current = watch("newPassword");

  return (
    <Form>
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
              if (errors.newPassword) trigger("newPassword");
            }}
            onBlur={onBlur}
            label="Nova senha"
            error={errors.newPassword}
            secureTextEntry
          />
        )}
        rules={{
          required: "Preencha o campo",
        }}
        name="newPassword"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="••••••••••••••••••••"
            value={value}
            onChangeText={(text) => {
              onChange(text);
              if (errors.newPassword2) trigger("newPassword2");
            }}
            onBlur={onBlur}
            label="Confirmar senha"
            error={errors.newPassword2}
            secureTextEntry
          />
        )}
        rules={{
          required: "Preencha o campo",
          validate: (value) =>
            value === passwordRef.current || "As senhas não coincidem",
        }}
        name="newPassword2"
      />
    </Form>
  );
};

export default AuthData;
