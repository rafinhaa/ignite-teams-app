import { FC } from "react";

import { Container, Title } from "./styles";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ type = "primary", title, ...rest }) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
