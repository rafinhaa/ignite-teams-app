import { FC } from "react";
import { Container } from "./styles";
import { Header, Highlight } from "@components/index";

const Groups: FC = () => {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
    </Container>
  );
};

export default Groups;
