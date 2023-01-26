import { memo } from 'react';
import { Card, Description, Image, Info, Name, Profession } from './styled';
import { TestimonialsCardProps } from './types';

export const TestimonialsCardOpen = memo(
  ({ icon, name, profession, description }: TestimonialsCardProps) => (
    <Card>
      <Image src={icon} alt={icon} title={icon} />
      <Description>{description}</Description>
      <Info>
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
      </Info>
    </Card>
  )
);
