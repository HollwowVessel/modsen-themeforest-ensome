import { memo } from 'react';

import { BreadCrumbs } from '@/ui/sections/BreadCrumbs';

import { Container, Description, Heading, Info, Name } from './styled';
import { DescriptionSectionProps } from './types';

export const DescriptionSection = memo(
  ({ name, heading, description }: DescriptionSectionProps) => (
    <Container>
      <BreadCrumbs />
      <Info>
        <Name>{name}</Name>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
      </Info>
    </Container>
  )
);
