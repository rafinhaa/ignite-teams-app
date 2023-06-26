import { FC } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "@theme/darkTheme";
import { Groups } from "@screens/index";

const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Groups />
    </ThemeProvider>
  );
};

export default App;
