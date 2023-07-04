import { FC } from "react";
import { ThemeProvider } from "styled-components/native";
import themes from "@theme/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/index";
import { StatusBar } from "react-native";
import { Routes } from "@routes/index";

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const RenderApp: FC<{
    fontsLoaded: boolean;
  }> = ({ fontsLoaded }) => (fontsLoaded ? <Routes /> : <Loading />);

  return (
    <ThemeProvider theme={themes.dark}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <RenderApp fontsLoaded={fontsLoaded} />
    </ThemeProvider>
  );
};

export default App;
