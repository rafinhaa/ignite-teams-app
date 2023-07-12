import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYERS_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { GroupNotExistsError } from "@utils/error/groupNotExist";

export const groupRemoveByName = async (groupDeleted: string) => {
  try {
    const storedGroups = await groupsGetAll();
    const groupExists = storedGroups.includes(groupDeleted);

    if (!groupExists)
      throw new GroupNotExistsError(
        "Não existe um grupo cadastrado com esse nome"
      );

    const groups = storedGroups.filter((group) => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify([...groups]));
    await AsyncStorage.removeItem(PLAYERS_COLLECTION);
  } catch (error) {
    throw error;
  }
};
