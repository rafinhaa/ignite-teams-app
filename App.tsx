import { FC } from "react";
import { ThemeProvider } from "styled-components/native";
import themes from "@theme/index";
import { Groups } from "@screens/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/index";

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const RenderApp: FC<{
    fontsLoaded: boolean;
  }> = ({ fontsLoaded }) => (fontsLoaded ? <Groups /> : <Loading />);

  return (
    <ThemeProvider theme={themes.dark}>
      <RenderApp fontsLoaded={fontsLoaded} />
    </ThemeProvider>
  );
};

export default App;
