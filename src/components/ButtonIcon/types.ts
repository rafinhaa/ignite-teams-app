import { TouchableOpacityProps } from "react-native";

export type ButtonIconProps = TouchableOpacityProps & {
  type?: "primary" | "secondary";
};
