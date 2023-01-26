import React, { memo } from 'react';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import { Container, Description, Heading, Image } from './styled';
import { SpecialCardProps } from './types';

export const SpecialCard = memo(
  ({ img, heading, description, link }: SpecialCardProps) => (
    <Container>
      <Image src={img} alt={img} />
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <ArrowLink text="Read more" to={link} />
    </Container>
  )
);
