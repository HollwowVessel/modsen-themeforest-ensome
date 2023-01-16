import { CardItem } from 'constants/benefitsCard';

import { Card, Description, Heading, Image } from './styled';

type BenefitsCardProps = CardItem;

export const BenefitsCard = ({
  description,
  heading,
  icon,
}: BenefitsCardProps) => (
  <Card>
    <Image src={icon} />
    <Heading>{heading}</Heading>
    <Description>{description}</Description>
  </Card>
);
