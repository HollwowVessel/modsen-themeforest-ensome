import React, { memo } from 'react';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import { Container, Description, Heading, Image } from './styled';

export const SolutionsCard = memo(
  ({
    img,
    heading,
    description,
    link,
  }: {
    img: string;
    heading: string;
    description: string;
    link: string;
  }) => (
    <Container>
      <Image src={img} alt={img} />
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <ArrowLink text="Read more" to={link} />
    </Container>
  )
);
