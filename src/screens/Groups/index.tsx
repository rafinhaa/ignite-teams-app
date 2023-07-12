import { FC, useCallback, useState } from "react";
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
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { useFocusEffect } from "@react-navigation/native";

type GroupsProps = {
  navigation: NativeStackNavigationProp<AppRoutesParamList, "groups">;
};

const Groups: FC<GroupsProps> = ({ navigation: { navigate } }) => {
  const [groups, setGroups] = useState<string[]>([]);

  const handleNewGroup = () => {
    navigate("new");
  };

  const fetchGroups = async () => {
    try {
      const data = await groupsGetAll();

      console.log(data);

      setGroups(data);
    } catch (error) {}
  };

  const handleOpenGroup = (group: string) => {
    navigate("players", { group });
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
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
