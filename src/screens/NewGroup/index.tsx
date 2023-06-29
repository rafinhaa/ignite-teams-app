import { FC, useState } from "react";
import { Container, Content, Icon } from "./styles";
import { Header, Button, Highlight } from "@components/index";

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

        <Button title="Criar" />
      </Content>
    </Container>
  );
};

export default Groups;
