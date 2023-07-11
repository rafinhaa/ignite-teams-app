import { playersGetByGroup } from "./playersGetByGroup";

export const playersGetByGroupAndTeam = async (group: string, team: string) => {
  try {
    const storedPlayers = await playersGetByGroup(group);
    const playersByGroup = storedPlayers.filter(
      (player) => player.team === team
    );

    return playersByGroup;
  } catch (error) {
    throw error;
  }
};
