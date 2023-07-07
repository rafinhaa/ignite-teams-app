import { FC, useState } from "react";
import { Container, Content, Icon } from "./styles";
import { Header, Button, Highlight, Input } from "@components/index";
import { useNavigation } from "@react-navigation/native";

const NewGroup: FC = () => {
  const [group, setGroup] = useState("");
  const { navigate } = useNavigation();

  const handleNew = () => {
    navigate("players", { group });
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
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
};

export default NewGroup;
