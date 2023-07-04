import { FC, useState } from "react";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import {
  ButtonIcon,
  Filter,
  Header,
  Highlight,
  Input,
  PlayerCard,
} from "@components/index";
import { FlatList } from "react-native";

const Groups: FC = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(["John Doe", "Jane Doe"]);

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
      <HeaderList>
        <FlatList
          horizontal
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
      />
    </Container>
  );
};

export default Groups;
