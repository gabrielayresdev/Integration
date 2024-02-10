import styled from "styled-components/native";

export interface BtnStyledInterface {
  background?: string;
  color?: string;
  font?: string;
  padding?: string;
}

export const Btn = styled.TouchableOpacity<BtnStyledInterface>`
  background: ${({ background }) => (background ? background : "#007AFF")};
  color: ${({ color }) => (color ? color : "#f1f4ff")};
  font-size: ${({ font }) => (font ? font : "1.25rem")};
  padding: ${({ padding }) => (padding ? padding : ".975rem")};

  width: 100%;
  border-radius: 0.75rem;

  display: flex;
  align-items: center;

  font-weight: 500;

  font-family: "Ubuntu Medium";
`;
