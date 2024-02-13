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
  const { pagination, control, handleSubmit, errors, watch } =
    useRegisterContext();
  const passwordRef = React.useRef<string>();
  passwordRef.current = watch("password", "");

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
              placeholder="email@example.com"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Email"
              error={errors.email}
            />
          )}
          rules={{
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: "Enter with a valid email",
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
              onChangeText={onChange}
              onBlur={onBlur}
              label="Password"
              error={errors.password}
              secureTextEntry
            />
          )}
          rules={{
            required: "Password is required",
          }}
          name="password"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="••••••••••••••••••••"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Password"
              error={errors.password2}
              secureTextEntry
            />
          )}
          rules={{
            required: "Confirm your password",
            validate: (value) =>
              value === passwordRef.current || "As senhas não coincidem",
          }}
          name="password2"
        />

        <ButtonsContainer>
          <Button text="Sign up" onClick={handleSubmit(onSubmit)} />
          <TwoLineAnchor
            firstLine="Already have an account?"
            secondLine="Sign in now"
            href="login"
          />
        </ButtonsContainer>
      </Form>
      )
    </>
  );
};

export default UserAuth;
