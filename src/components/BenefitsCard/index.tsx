import { memo } from 'react';
import { Card, Description, Heading, Image } from './styled';
import { BenefitsCardProps } from './types';

export const BenefitsCard = memo(
  ({ description, heading, icon }: BenefitsCardProps) => (
    <Card>
      <Image src={icon} loading="lazy" />
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
    </Card>
  )
);
