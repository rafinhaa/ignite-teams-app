import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconProps = TouchableOpacityProps & {
  type?: "primary" | "secondary";
  icon: keyof typeof MaterialIcons.glyphMap;
};
