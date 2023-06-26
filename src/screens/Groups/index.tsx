import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Container, Title } from "./styles";

const Groups: FC = () => {
  return (
    <Container>
      <Title>Groups</Title>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Groups;
