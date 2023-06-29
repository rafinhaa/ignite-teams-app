import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  type?: "primary" | "secondary";
  title: string;
};
