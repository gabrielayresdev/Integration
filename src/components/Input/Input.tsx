import React, { SetStateAction } from "react";
import {
  InputContainer,
  InputField,
  InputStylesInterface,
  Label,
} from "./styles";

interface InputInterface extends InputStylesInterface {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  label?: string;
  placeholder?: string;
}

const Input = ({
  value,
  setValue,
  label,
  placeholder,
  ...args
}: InputInterface) => {
  return (
    <InputContainer {...args}>
      <Label>{label}</Label>
      <InputField
        placeholder={placeholder}
        value={value}
        onChangeText={(value) => setValue(value)}
      />
    </InputContainer>
  );
};

export default Input;
