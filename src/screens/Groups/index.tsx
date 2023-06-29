import { FC, useState } from "react";
import { Container } from "./styles";
import { Header, Highlight, GroupCard } from "@components/index";
import { FlatList } from "react-native";

const Groups: FC = () => {
  const [groups, setGroups] = useState(["as", "as1", "as2"]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
};

export default Groups;
