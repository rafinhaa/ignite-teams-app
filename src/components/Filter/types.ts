import { TouchableOpacityProps } from "react-native";

export type FilterProps = TouchableOpacityProps & {
  isActive?: boolean;
  title: string;
};
