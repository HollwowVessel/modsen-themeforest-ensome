import { memo } from 'react';
import {
  Container,
  Description,
  Heading,
  Home,
  Info,
  Links,
  Section,
  Team,
  Text,
} from './styled';
import { ThirdDescriptionSectionProps } from './types';

export const ThirdDescriptionSection = memo(
  ({ link, heading, text, text2 }: ThirdDescriptionSectionProps) => (
    <Container>
      <Section>
        <Links>
          <Home to="/">Home</Home>
          <Team to={link}>{heading}</Team>
        </Links>
        <Info>
          <Heading>{heading}</Heading>
          <Description>
            <Text>{text}</Text>
            <Text>{text2}</Text>
          </Description>
        </Info>
      </Section>
    </Container>
  )
);
