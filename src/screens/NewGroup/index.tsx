import { FC } from "react";
import { Container, Content, Icon } from "./styles";
import { Header, Button, Highlight, Input } from "@components/index";
import { useNavigation } from "@react-navigation/native";

const NewGroup: FC = () => {
  const { navigate } = useNavigation();

  const handleNew = () => {
    navigate("players", { group: "new" });
  };

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
        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
};

export default NewGroup;
