import { FC } from "react";
import { ThemeProvider } from "styled-components/native";
import themes from "@theme/index";
import { Groups } from "@screens/index";

const App: FC = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <Groups />
    </ThemeProvider>
  );
};

export default App;
