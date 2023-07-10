import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupGetAll } from "./groupsGetAll";

export const groupCreate = async (newGroup: string) => {
  try {
    const storedGroups = await groupGetAll();
    const groupAlreadyExists = storedGroups.includes(newGroup);

    if (groupAlreadyExists) return;

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroups, newGroup])
    );
  } catch (error) {
    throw error;
  }
};
