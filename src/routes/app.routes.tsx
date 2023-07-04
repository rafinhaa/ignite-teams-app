import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups, NewGroup, Players } from "@screens/index";

const { Navigator, Screen } = createNativeStackNavigator();

export type AppRoutesParamList = {
  groups: undefined;
  new: undefined;
  players: {
    group: string;
  };
};

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
