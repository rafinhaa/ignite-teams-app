import { FC } from "react";
import { Container, Message } from "./styles";
import type { ListEmptyProps } from "./type";

const ListEmpty: FC<ListEmptyProps> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default ListEmpty;
