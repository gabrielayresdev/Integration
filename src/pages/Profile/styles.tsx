import styled from "styled-components/native";

export const Switch = styled.View`
  margin: 2.5rem 0 4.5rem;
  border-bottom-color: #33415c;
  border-bottom-width: 1px;
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding-left: 1rem;
`;

export const SwitchItem = styled.Text<{ active?: boolean }>`
  font-size: 1.25rem;
  color: ${({ active }) => (active ? "#007AFF" : "#33415C")};
  font-family: "Ubuntu Regular";

  position: relative;
  top: 1px;
  border-bottom-color: ${({ active }) => (active ? "#007AFF" : "transparent")};
  border-bottom-width: 2px;
  transition: all 0.3s;
`;
