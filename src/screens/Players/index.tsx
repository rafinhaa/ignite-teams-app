import { FC } from "react";
import { Container, Form } from "./styles";
import {
  ButtonIcon,
  Filter,
  Header,
  Highlight,
  Input,
} from "@components/index";

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
      <Filter title="Time" />
    </Container>
  );
};

export default Groups;
