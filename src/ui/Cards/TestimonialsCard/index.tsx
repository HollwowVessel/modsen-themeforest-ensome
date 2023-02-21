import { Card, Description, Image, Info, Name, Profession } from './styled';
import { TestimonialsCardProps } from './types';

export const TestimonialsCard = ({
  icon,
  name,
  profession,
  description,
}: TestimonialsCardProps) => (
  <Card>
    <Image src={icon} alt={icon} title={icon} />
    <Info>
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
    </Info>
    <Description>{description}</Description>
  </Card>
);
