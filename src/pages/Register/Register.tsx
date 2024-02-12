import React from "react";
import { RegisterDiv } from "./styles";
import {
  CircleDetails,
  Header,
  Title,
  Paragraph,
  Form,
  ButtonsContainer,
  BottomDetails,
  BottomDetailsFirstSvg,
} from "../../styles/formStyles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import TwoLineAnchor from "../../components/TwoLineAnchor/TwoLineAnchor";
import Svg, { Circle } from "react-native-svg";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
  password2: string;
}

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password2: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <RegisterDiv>
      <CircleDetails
        width="445px"
        viewBox="0 0 100 100"
        left="-222.5px"
        top="-268px"
      >
        <Circle cx="50" cy="50" r="50" strokeWidth=".5" fill="#0096c71a" />
      </CircleDetails>
      <Header>
        <Title>Login Account</Title>
        <Paragraph>Nice to see you again</Paragraph>
        <Paragraph> Sign in with you email and password</Paragraph>
      </Header>
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
              secureTextEntry
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
              label="Email"
              error={errors.email}
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
              label="Email"
              error={errors.email}
              secureTextEntry
            />
          )}
          rules={{
            required: "Confirm your password",
          }}
          name="password2"
        />

        <ButtonsContainer>
          <Button text="Sign up" onClick={handleSubmit(onSubmit)} />
          <TwoLineAnchor
            firstLine="Already have an account?"
            secondLine="Sign in now"
          />
        </ButtonsContainer>

        <BottomDetails>
          <BottomDetailsFirstSvg
            width="262px"
            height="262px"
            viewBox="0 0 100 100"
          >
            <Circle cx="50" cy="50" r="50" strokeWidth=".5" fill="#48CAE4" />
          </BottomDetailsFirstSvg>
          <Svg width="445px" height="445px" viewBox="0 0 100 100">
            <Circle cx="50" cy="50" r="50" strokeWidth=".5" fill="#00B4D8" />
          </Svg>
        </BottomDetails>
      </Form>
    </RegisterDiv>
  );
};

export default Register;
