import { FC } from "react";

import { Container, Icon } from "./styles";
import { ButtonIconProps } from "./types";

const ButtonIcon: FC<ButtonIconProps> = ({ type = "primary", ...rest }) => {
  return (
    <Container {...rest}>
      <Icon type={type} name="home" />
    </Container>
  );
};

export default ButtonIcon;
