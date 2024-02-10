import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const GhostText = styled.View`
  color: #979dac;
  font-family: "Ubuntu Regular";
`;

export const AnchorText = styled.TouchableOpacity`
  color: #33415c;
  font-family: "Ubuntu Regular";

  display: flex;
`;

export const Underline = styled.View`
  width: 100%;
  height: 1px;
  background: #33415c;
`;
