import { FC, useState } from "react";
import { Container } from "./styles";
import {
  Header,
  Highlight,
  GroupCard,
  ListEmpty,
  Button,
} from "@components/index";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Groups: FC = () => {
  const [groups, setGroups] = useState([]);
  const { navigate } = useNavigation();

  const handleNewGroup = () => {
    navigate("new");
  };

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
};

export default Groups;
