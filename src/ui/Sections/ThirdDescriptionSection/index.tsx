import { memo } from 'react';

import { BreadCrumbs } from '@/ui/sections/BreadCrumbs';

import { Container, Description, Heading, Info, Section, Text } from './styled';
import { ThirdDescriptionSectionProps } from './types';

export const ThirdDescriptionSection = memo(
  ({ heading, text, text2 }: ThirdDescriptionSectionProps) => (
    <Container>
      <Section>
        <BreadCrumbs textColor="white" />
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
