import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import type { ButtonIconProps } from "./types";

export const Container = styled.TouchableOpacity`
  height: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Pick<ButtonIconProps, "type">>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
  })
)``;
