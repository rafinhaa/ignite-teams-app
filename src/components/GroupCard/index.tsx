import { FC } from "react";
import { Container, Icon, Title } from "./styles";
import type { GroupCardProps } from "./type";

const GroupCard: FC<GroupCardProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
