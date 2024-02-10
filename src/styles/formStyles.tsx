import styled from "styled-components/native";
import Svg from "react-native-svg";

interface CircleDetails {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const CircleDetails = styled(Svg)<CircleDetails>`
  aspect-ratio: 1/1;
  position: absolute;

  top: ${({ top }) => (top ? top : "auto")};
  left: ${({ left }) => (left ? left : "auto")};
  right: ${({ right }) => (right ? right : "auto")};
  bottom: ${({ bottom }) => (bottom ? bottom : "auto")};

  border: none;
  z-index: -1;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 7.25rem;
  margin-bottom: 3.125rem;
`;

export const Title = styled.Text`
  font-size: 2rem;
  font-weight: 500;
  color: #33415c;

  margin-bottom: 0.5rem;

  font-family: "Ubuntu Medium";
`;

export const Paragraph = styled.Text`
  font-size: 0.875rem;
  font-weight: 500;
  color: #33415c;

  font-family: "Ubuntu Medium";
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 0 1rem;
`;

export const Anchor = styled.TouchableOpacity`
  color: #0096c7;

  font-family: "Ubuntu Medium";
`;

export const ButtonsContainer = styled.View`
  display: flex;
  gap: 1.5rem;

  margin-bottom: 223px;

  margin-top: 2.5rem;
`;

export const BottomDetails = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: -222.5px;
  right: -227px;
  z-index: -1;
`;

export const BottomDetailsFirstSvg = styled(Svg)`
  transform: translateX(117px);
`;
