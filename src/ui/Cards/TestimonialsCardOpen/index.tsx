import { memo } from 'react';
import { Card, Description, Image, Info, Name, Profession } from './styled';
import { TestimonialsCardProps } from './types';

export const TestimonialsCardOpen = ({
  icon,
  name,
  profession,
  description,
  animation,
}: TestimonialsCardProps) => (
  <Card animation={animation}>
    <Image src={icon} alt={icon} title={icon} loading="lazy" />
    <Description>{description}</Description>
    <Info>
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
    </Info>
  </Card>
);
