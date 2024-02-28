import React from "react";
import Svg, { Circle } from "react-native-svg";
import { LoginDiv, FlexRow, Anchor } from "./styles";
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
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import TwoLineAnchor from "../../components/TwoLineAnchor/TwoLineAnchor";
import { Controller, useForm } from "react-hook-form";
import userService from "../../services/userService.ts";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [remember, setRemember] = React.useState(false);
  const navigation = useNavigation();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await userService.login(data).then((response) => {
        console.log(response);
        return response;
      });
      if (response?.status === 200) {
        navigation.navigate("profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <LoginDiv>
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
            />
          )}
          rules={{
            required: "Email é necessário",
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
              label="Senha"
              error={errors.password}
              secureTextEntry
            />
          )}
          rules={{
            required: "Senha é necessária",
          }}
          name="password"
        />

        <FlexRow>
          <Checkbox
            checked={remember}
            setChecked={setRemember}
            label="Lembrar conta"
          />
          <Anchor>Esqueceu sua senha?</Anchor>
        </FlexRow>

        <ButtonsContainer>
          <Button text="Entrar" onClick={handleSubmit(onSubmit)} />
          <TwoLineAnchor
            firstLine="Ainda não possui uma conta?"
            secondLine="Criar conta agora"
            href="register"
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
    </LoginDiv>
  );
};

export default Login;
