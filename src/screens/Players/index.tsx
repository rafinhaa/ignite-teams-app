import { FC, useEffect, useRef, useState } from "react";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import {
  Button,
  ButtonIcon,
  Filter,
  Header,
  Highlight,
  Input,
  ListEmpty,
  Loading,
  PlayerCard,
} from "@components/index";
import { Alert, FlatList, TextInput } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { AppRoutesParamList } from "@routes/app.routes";
import { PlayerNameEmptyError } from "@utils/error/PlayerNameEmpty";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { BaseError } from "@utils/error/appError";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

type ProfileScreenNavigationProp = RouteProp<AppRoutesParamList, "players">;

const Groups: FC = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const newPlayerNameInputRef = useRef<TextInput>(null);
  const { navigate } = useNavigation();

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
      newPlayerNameInputRef.current?.blur();
      newPlayerNameInputRef.current?.clear();
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
      setIsLoading(true);

      const players = await playersGetByGroupAndTeam(group, team);
      setPlayers(players);
    } catch (error) {
      if (error instanceof BaseError) {
        return alert(error.message);
      }

      alert("Não foi possível carregar os jogadores");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayerRemove = async (player: PlayerStorageDTO) => {
    try {
      await playerRemoveByGroup(player, group);
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof BaseError) {
        return alert(error.message);
      }
      alert("Não foi possível remover o player");
    }
  };

  const groupRemove = async () => {
    try {
      await groupRemoveByName(group);
      navigate("groups");
    } catch (error) {
      if (error instanceof BaseError) {
        return alert(error.message);
      }
      alert("Não foi possível remover o grupo");
    }
  };

  const handleGroupRemove = async () => {
    Alert.alert("Remover", "Deseja remover o grupo?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: groupRemove,
      },
    ]);
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
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
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
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handlePlayerRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas nessa time" />
          )}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
        />
      )}
      <Button
        title="Remover turma"
        type="secondary"
        onPress={handleGroupRemove}
      />
    </Container>
  );
};

export default Groups;
