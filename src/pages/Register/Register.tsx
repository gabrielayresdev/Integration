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

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
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
        />
        <Input
          value={password2}
          setValue={setPassword2}
          label="Password"
          placeholder="••••••••••••••••••••"
          marginBottom="1.25rem"
        />

        <ButtonsContainer>
          <Button text="Sign in" onClick={() => {}} />
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
