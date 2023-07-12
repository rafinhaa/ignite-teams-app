import { RefObject } from "react";
import { TextInput, TextInputProps } from "react-native";

export type InputProps = TextInputProps & {
  inputRef: RefObject<TextInput>;
};
