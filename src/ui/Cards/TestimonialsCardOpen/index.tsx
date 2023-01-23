import { Card, Description, Image, Info, Name, Profession } from './styled';

interface TestimonialsCardProps {
  icon: string;
  name: string;
  profession: string;
  description: string;
}

export const TestimonialsCardOpen = ({
  icon,
  name,
  profession,
  description,
}: TestimonialsCardProps) => (
  <Card>
    <Image src={icon} alt={icon} title={icon} />
    <Description>{description}</Description>
    <Info>
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
    </Info>
  </Card>
);
