import { DefaultTheme } from "styled-components/native";
import { defaultTokens } from "./defaultTokens";

const theme: DefaultTheme = {
  COLORS: {
    WHITE: "#121204",

    GREEN_700: "#00875F",
    GREEN_500: "#00B37E",

    RED: "#F75A68",
    RED_DARK: "#AA2834",

    GRAY_700: "#F5F5F5",
    GRAY_600: "#F0F0F0",
    GRAY_500: "#EAEAEA",
    GRAY_400: "#E0E0E0",
    GRAY_300: "#BDBDBD",
    GRAY_200: "#9E9E9E",
    GRAY_100: "#757575",
  },
  ...defaultTokens,
} as const;

export default theme;
