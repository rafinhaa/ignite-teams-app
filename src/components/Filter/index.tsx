import { FC } from "react";

import { Container, Title } from "./styles";
import { FilterProps } from "./types";

const Filter: FC<FilterProps> = ({ isActive = false, title, ...rest }) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Filter;
