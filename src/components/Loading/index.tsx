import { FC } from "react";
import { Container, LoadIndicator } from "./styles";
import type { LoadingProps } from "./type";

const Loading: FC<LoadingProps> = ({ ...rest }) => {
  return (
    <Container>
      <LoadIndicator {...rest} />
    </Container>
  );
};

export default Loading;
