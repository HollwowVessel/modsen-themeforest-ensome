import { memo } from 'react';

import { BreadCrumbs } from '@/ui/sections/BreadCrumbs';

import { Container, Heading } from './styled';
import { SecondDescriptionSectionProps } from './types';

export const SecondDescriptionSection = memo(
  ({ heading }: SecondDescriptionSectionProps) => (
    <Container>
      <Heading>{heading}</Heading>
      <BreadCrumbs />
    </Container>
  )
);
