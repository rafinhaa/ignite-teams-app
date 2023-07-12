import { FC, useEffect, useState } from "react";
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
import { RouteProp, useFocusEffect, useRoute } from "@react-navigation/native";

import { AppRoutesParamList } from "@routes/app.routes";
import { PlayerNameEmptyError } from "@utils/error/PlayerNameEmpty";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { BaseError } from "@utils/error/appError";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

type ProfileScreenNavigationProp = RouteProp<AppRoutesParamList, "players">;

const Groups: FC = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
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
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof BaseError) {
        return alert(error.message);
      }
      alert("Não foi possível inserir o player");
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      const players = await playersGetByGroupAndTeam(group, team);
      setPlayers(players);
    } catch (error) {
      if (error instanceof BaseError) {
        return alert(error.message);
      }

      alert("Não foi possível carregar os jogadores");
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
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
