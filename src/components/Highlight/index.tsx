import { FC } from "react";

import { Container, SubTitle, Title } from "./styles";
import { HighlightProps } from "./types";

const Highlight: FC<HighlightProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default Highlight;
