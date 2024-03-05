import React from "react";
import { RegisterDiv } from "./styles";
import {
  CircleDetails,
  Header,
  Title,
  Paragraph,
  BottomDetails,
  BottomDetailsFirstSvg,
} from "../../styles/formStyles";
import Svg, { Circle } from "react-native-svg";
import { useRegisterContext } from "../../contexts/RegisterContext";
import UserAuth from "../../components/RegisterPages/UserAuth";
import UserData from "../../components/RegisterPages/UserData";
import UserAddress from "../../components/RegisterPages/UserAddress";
import SuccessPage from "../SuccessPage/SuccessPage";
import PageSlider from "../../components/PageSlider/PageSlider";

const Register = () => {
  const { pagination } = useRegisterContext();

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
        <Title>Create Account</Title>
        <Paragraph>Get started.</Paragraph>
        <Paragraph>Fill the form and begin to look for new books.</Paragraph>
      </Header>
      {pagination.page === 3 ? (
        <SuccessPage />
      ) : (
        <PageSlider page={pagination.page}>
          <UserAuth />
          <UserData />
          <UserAddress />
        </PageSlider>
      )}
      {/* {pages[pagination.page]} */}
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
    </RegisterDiv>
  );
};

export default Register;
