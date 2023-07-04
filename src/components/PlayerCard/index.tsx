import { FC } from "react";

import { Container, Icon, Name } from "./styles";
import { PlayerCardProps } from "./types";
import ButtonIcon from "../ButtonIcon";

const PlayerCard: FC<PlayerCardProps> = ({ name, onRemove }) => {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </Container>
  );
};

export default PlayerCard;
