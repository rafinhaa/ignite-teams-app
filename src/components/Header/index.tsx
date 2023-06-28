import { FC } from "react";

import LogoImg from "@assets/logo.png";

import { BackButton, BackIcon, Container, Logo } from "./styles";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ showBackButton = false }) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Container>
  );
};

export default Header;
