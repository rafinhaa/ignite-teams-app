import { TouchableOpacityProps } from "react-native";

export type PlayerCardProps = TouchableOpacityProps & {
  name: string;
  onRemove: () => void;
};
