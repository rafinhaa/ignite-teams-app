import { FC } from "react";

import LogoImg from "@assets/logo.png";

import { Container, Logo } from "./styles";

const Header: FC = () => {
  return (
    <Container>
      <Logo source={LogoImg} />
    </Container>
  );
};

export default Header;
