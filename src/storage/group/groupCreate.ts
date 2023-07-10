import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { GroupAlreadyExistsError } from "@utils/error/groupAlreadyExist";

export const groupCreate = async (newGroup: string) => {
  try {
    const storedGroups = await groupsGetAll();
    const groupAlreadyExists = storedGroups.includes(newGroup);

    if (groupAlreadyExists)
      throw new GroupAlreadyExistsError(
        "Já existe um grupo cadastrado com esse nome"
      );

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroups, newGroup])
    );
  } catch (error) {
    throw error;
  }
};
