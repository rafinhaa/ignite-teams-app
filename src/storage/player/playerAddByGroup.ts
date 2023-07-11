import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerAlreadyExistError } from "@utils/error/playerAlreadyExist";

export const playerAddByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    const playerCollection = `${PLAYERS_COLLECTION}-${group}`;
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.some(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists)
      throw new PlayerAlreadyExistError("Esta pessoa já está na turma");

    const storage = JSON.stringify([...storedPlayers, newPlayer]);
    await AsyncStorage.setItem(playerCollection, storage);
  } catch (error) {
    throw error;
  }
};
