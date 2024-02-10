import React from "react";
import { Btn, BtnStyledInterface } from "./styles";

interface ButtonInterface extends BtnStyledInterface {
  text: string;
  onClick: VoidFunction;
}

const Button = ({ text, onClick, ...args }: ButtonInterface) => {
  return (
    <Btn onPress={onClick} {...args}>
      {text}
    </Btn>
  );
};

export default Button;
