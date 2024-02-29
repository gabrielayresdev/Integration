import LottieView from "lottie-react-native";
import React from "react";
import {
  BottomDetail,
  ButtonContainer,
  Container,
  Text,
  UpperDetail,
} from "./styles";
import Button from "../../components/Button/Button";
import {
  BottomDetails,
  BottomDetailsFirstSvg,
  CircleDetails,
} from "../../styles/formStyles";
import { Circle, Svg } from "react-native-svg";

const SuccessPage = () => {
  const animationRef = React.useRef<LottieView | null>(null);

  React.useEffect(() => {
    if (animationRef.current !== null) {
      setTimeout(() => {
        animationRef.current?.pause();
      }, 2100);
    }
  }, [animationRef]);

  return (
    <Container>
      <CircleDetails
        width="445px"
        viewBox="0 0 100 100"
        left="-222.5px"
        top="-268px"
      >
        <Circle cx="50" cy="50" r="50" strokeWidth=".5" fill="#0096c71a" />
      </CircleDetails>
      <LottieView
        style={{ transform: [{ scale: 1.8 }] }}
        ref={animationRef}
        source={require("../../../assets/success-animation.json")}
        autoPlay
        loop={false}
        progress={1} // Set progress to 1 to show the animation fully scaled
      />
      <Text>Conta criada com sucesso!</Text>

      <ButtonContainer>
        <Button
          text="Entrar na sua conta"
          onClick={() => {}}
          padding=".5rem"
          paddingLeft="1.25rem"
          paddingRight="1.25rem"
          radius=".25rem"
        />
      </ButtonContainer>
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
    </Container>
  );
};

export default SuccessPage;
