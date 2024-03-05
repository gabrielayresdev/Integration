import styled from "styled-components/native";

export const Container = styled.View<{ page: number }>`
  width: 100vw;
  overflow-x: hidden;
  flex-direction: row;
  display: block;
`;

export const Slider = styled.View<{ page: number }>`
  position: relative;
  top: 0;
  left: ${({ page }) => `-${page * 100}vw`};
  flex-direction: row;
  transition: all 0.3s;
`;
