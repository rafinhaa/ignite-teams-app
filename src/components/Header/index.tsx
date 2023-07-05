import { FC } from "react";

import LogoImg from "@assets/logo.png";

import { BackButton, BackIcon, Container, Logo } from "./styles";
import { HeaderProps } from "./types";
import { useNavigation } from "@react-navigation/native";

const Header: FC<HeaderProps> = ({ showBackButton = false }) => {
  const { navigate } = useNavigation();

  const handleGoBack = () => {
    navigate("groups");
  };

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Container>
  );
};

export default Header;
