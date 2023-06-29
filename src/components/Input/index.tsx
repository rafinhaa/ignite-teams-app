import { FC } from "react";
import { Container } from "./styles";
import type { InputProps } from "./type";

const Input: FC<InputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default Input;
