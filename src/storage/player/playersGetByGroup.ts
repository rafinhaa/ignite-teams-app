import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const playersGetByGroup = async (group: string) => {
  try {
    const playerCollection = `${PLAYERS_COLLECTION}-${group}`;
    const storedPlayers = await AsyncStorage.getItem(playerCollection);

    const players: PlayerStorageDTO[] = storedPlayers
      ? JSON.parse(storedPlayers)
      : [];

    return players;
  } catch (error) {
    throw error;
  }
};
