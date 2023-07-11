import { FC, useState } from "react";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import {
  Button,
  ButtonIcon,
  Filter,
  Header,
  Highlight,
  Input,
  ListEmpty,
  PlayerCard,
} from "@components/index";
import { FlatList } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { AppRoutesParamList } from "@routes/app.routes";
import { PlayerNameEmptyError } from "@utils/error/PlayerNameEmpty";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { BaseError } from "@utils/error/appError";

type ProfileScreenNavigationProp = RouteProp<AppRoutesParamList, "players">;

const Groups: FC = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(["John Doe", "Jane Doe"]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const {
    params: { group },
  } = useRoute<ProfileScreenNavigationProp>();

  const handleAddPlayer = async () => {
    try {
      if (newPlayerName.trim().length === 0)
        throw new PlayerNameEmptyError("O nome do player não pode ser vazio");

      await playerAddByGroup(
        {
          name: newPlayerName,
          team,
        },
        group
      );
      setNewPlayerName("");
    } catch (error) {
      if (error instanceof BaseError) {
        return alert(error.message);
      }
      alert("Não foi possível inserir o player");
    }
  };

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
        showsVerticalScrollIndicator={false}
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nessa time" />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover turma" type="secondary" />
    </Container>
  );
};

export default Groups;
