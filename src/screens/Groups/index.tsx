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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppRoutesParamList } from "@routes/app.routes";

type GroupsProps = {
  navigation: NativeStackNavigationProp<AppRoutesParamList, "groups">;
};

const Groups: FC<GroupsProps> = ({ navigation: { navigate } }) => {
  const [groups, setGroups] = useState([]);

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
