import { FC } from "react";
import { Container, Form } from "./styles";
import { ButtonIcon, Header, Highlight, Input } from "@components/index";

const Groups: FC = () => {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
};

export default Groups;
