import { FC } from "react";
import { Container } from "./styles";
import { ButtonIcon, Header, Highlight, Input } from "@components/index";

const Groups: FC = () => {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <ButtonIcon />
    </Container>
  );
};

export default Groups;
