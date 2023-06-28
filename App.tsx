import { FC } from "react";
import { ThemeProvider } from "styled-components/native";
import themes from "@theme/index";
import { Groups } from "@screens/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const RenderApp: FC<{
    fontsLoaded: boolean;
  }> = ({ fontsLoaded }) =>
    fontsLoaded ? (
      <Groups />
    ) : (
      <ActivityIndicator size="large" style={{ flex: 1 }} />
    );

  return (
    <ThemeProvider theme={themes.dark}>
      <RenderApp fontsLoaded={fontsLoaded} />
    </ThemeProvider>
  );
};

export default App;
