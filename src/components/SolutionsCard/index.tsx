import React from 'react';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import { Container, Description, Heading, Image } from './styled';

export const SolutionsCard = ({
  img,
  heading,
  description,
}: {
  img: string;
  heading: string;
  description: string;
}) => (
  <Container>
    <Image src={img} alt={img} />
    <Heading>{heading}</Heading>
    <Description>{description}</Description>
    <ArrowLink text="Read more" />
  </Container>
);
