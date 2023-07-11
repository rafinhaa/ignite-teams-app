import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const playerAddByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    const playerCollection = `${PLAYERS_COLLECTION}-${group}`;
    const storedPlayers = await AsyncStorage.getItem(playerCollection);

    await AsyncStorage.setItem(
      playerCollection,
      JSON.stringify(newPlayer.name)
    );
  } catch (error) {
    throw error;
  }
};
