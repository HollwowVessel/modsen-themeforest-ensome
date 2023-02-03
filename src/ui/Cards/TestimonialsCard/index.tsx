import { Keyframes } from 'styled-components';
import { Card, Description, Image, Info, Name, Profession } from './styled';
import { TestimonialsCardProps } from './types';

export const TestimonialsCard = ({
  icon,
  name,
  profession,
  description,
  animation,
}: TestimonialsCardProps) => (
  <Card animation={animation as Keyframes}>
    <Image src={icon} alt={icon} title={icon} loading="lazy" />
    <Info>
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
    </Info>
    <Description>{description}</Description>
  </Card>
);
