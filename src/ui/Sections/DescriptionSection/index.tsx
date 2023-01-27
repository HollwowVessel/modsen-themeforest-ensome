import { memo } from 'react';
import {
  Container,
  Description,
  Heading,
  Home,
  Info,
  Links,
  Name,
  Solutions,
} from './styled';
import { DescriptionSectionProps } from './types';

export const DescriptionSection = memo(
  ({ link, name, heading, description }: DescriptionSectionProps) => (
    <Container>
      <Links>
        <Home to="/">Home</Home>
        <Solutions to={`/${link}`}>{name}</Solutions>
      </Links>
      <Info>
        <Name>{name}</Name>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
      </Info>
    </Container>
  )
);
