import { FC, useState } from "react";
import { Container, Content, Icon } from "./styles";
import { Header, Button, Highlight, Input, Space } from "@components/index";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { GroupNameEmptyError } from "@utils/error/groupNameEmpty";
import { BaseError } from "@utils/error/appError";

const NewGroup: FC = () => {
  const [group, setGroup] = useState("");
  const { navigate } = useNavigation();

  const handleNew = async () => {
    try {
      if (group.trim().length === 0)
        throw new GroupNameEmptyError("O nome do grupo não pode ser vazio");

      await groupCreate(group);
      navigate("players", { group });
    } catch (error) {
      if (error instanceof BaseError) {
        return alert(error.message);
      }
      alert("Não foi possível criar o grupo");
    }
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
        <Space height={12} />
        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
};

export default NewGroup;
