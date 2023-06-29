import { FC } from "react";

import { Container, Icon } from "./styles";
import { ButtonIconProps } from "./types";

const ButtonIcon: FC<ButtonIconProps> = ({
  type = "primary",
  icon,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Icon type={type} name={icon} />
    </Container>
  );
};

export default ButtonIcon;
