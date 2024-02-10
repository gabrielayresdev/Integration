import React from "react";
import Svg, { Circle } from "react-native-svg";
import {
  Anchor,
  BottomDetails,
  BottomDetailsFirstSvg,
  ButtonsContainer,
  CircleDetails,
  FlexRow,
  Form,
  LoginDiv,
  LoginHeader,
  Paragraph,
  Title,
} from "./styles";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import TwoLineAnchor from "../../components/TwoLineAnchor/TwoLineAnchor";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
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

        <ButtonsContainer>
          <Button text="Sign in" onClick={() => {}} />
          <TwoLineAnchor
            firstLine="Don't have an account yet?"
            secondLine="Create an account now"
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
