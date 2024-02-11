import React, { SetStateAction } from "react";
import {
  Error,
  FlexBox,
  InputContainer,
  InputField,
  InputStylesInterface,
  Label,
} from "./styles";
import { TextInputProps, View } from "react-native";
import { FieldError } from "react-hook-form";

//! Fazer o extends funcionar
interface InputInterface extends TextInputProps {
  value: string;
  onChangeText: (text: String) => void;
  onBlur?: VoidFunction;
  label?: string;
  placeholder?: string;
  error: FieldError | undefined;
}

const Input = ({
  value,
  onChangeText,
  onBlur,
  label,
  placeholder = "",
  error,
  ...args
}: InputInterface) => {
  return (
    <InputContainer>
      <FlexBox>
        <Label>{label}</Label>
        <Error>{error ? error.message : null}</Error>
      </FlexBox>
      <InputField
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        {...args}
      />
    </InputContainer>
  );
};

export default Input;
