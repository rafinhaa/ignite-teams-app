import { FC } from "react";
import { Container } from "./styles";
import { Header, Highlight, GroupCard } from "@components/index";

const Groups: FC = () => {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Grupo 1" />
    </Container>
  );
};

export default Groups;
