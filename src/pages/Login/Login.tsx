import React from "react";
import {
  Anchor,
  FlexRow,
  Form,
  LoginDiv,
  LoginHeader,
  Paragraph,
  Title,
} from "./styles";
import { Text, View } from "react-native";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  return (
    <LoginDiv>
      <LoginHeader>
        <Title>Login Account</Title>
        <Paragraph>Nice to see you again</Paragraph>
        <Paragraph> Sign in with you email and password</Paragraph>
      </LoginHeader>
      <Form>
        <Input
          value={email}
          setValue={setEmail}
          label="Email"
          placeholder="email@example.com"
        />
        <Input
          value={password}
          setValue={setPassword}
          label="Password"
          placeholder="••••••••••••••••••••"
          marginBottom="1.25rem"
        />

        <FlexRow>
          <Checkbox
            checked={remember}
            setChecked={setRemember}
            label="Remember me"
          />
          <Anchor>Forgot your password?</Anchor>
        </FlexRow>
      </Form>
    </LoginDiv>
  );
};

export default Login;
