import { FC } from "react";
import { Container, Content, Icon } from "./styles";
import { Header, Button, Highlight, Input } from "@components/index";

const Groups: FC = () => {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" />
      </Content>
    </Container>
  );
};

export default Groups;
