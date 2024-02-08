import styled from "styled-components/native";

export const LoginDiv = styled.View`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginHeader = styled.View`
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

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Anchor = styled.TouchableOpacity`
  color: #0096c7;

  font-family: "Ubuntu Medium";
`;
