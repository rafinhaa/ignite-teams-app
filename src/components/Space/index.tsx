import { FC } from "react";
import { Container } from "./styles";
import type { SpaceProps } from "./types";

const Space: FC<SpaceProps> = ({ height = 16 }) => {
  return <Container height={height} />;
};

export default Space;
