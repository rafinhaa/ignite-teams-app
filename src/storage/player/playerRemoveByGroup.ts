import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerNotExistError } from "@utils/error/playerNotExist";

export const playerRemoveByGroup = async (
  player: PlayerStorageDTO,
  group: string
) => {
  try {
    const playerCollection = `${PLAYERS_COLLECTION}-${group}`;
    const storedPlayers = await playersGetByGroup(group);

    const playerExists = storedPlayers.filter(
      (storedPlayer) => storedPlayer.name !== player.name
    );

    if (!playerExists)
      throw new PlayerNotExistError("Esta pessoa não está nessa turma");

    const storage = JSON.stringify([...playerExists]);
    await AsyncStorage.setItem(playerCollection, storage);
  } catch (error) {
    throw error;
  }
};
