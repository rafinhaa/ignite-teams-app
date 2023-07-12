import { FC } from "react";
import { Container } from "./styles";
import type { InputProps } from "./types";

const Input: FC<InputProps> = ({ inputRef, ...rest }) => {
  return <Container ref={inputRef} {...rest} />;
};

export default Input;
