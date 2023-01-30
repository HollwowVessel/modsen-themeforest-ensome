import { memo } from 'react';
import { BenefitsCard } from '@/components/BenefitsCard';
import { CardItem, cardItems } from '@/constants/benefitsCard';

import { Cards, Container, Description, Heading, Info } from './styled';
import { BenefitsProps } from './types';

export const Benefits = memo(
  ({ heading, description, background }: BenefitsProps) => (
    <Container background={background}>
      <Info>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
      </Info>
      <Cards>
        {cardItems.map(({ icon, heading, description }: CardItem, id) => (
          <BenefitsCard
            icon={icon}
            heading={heading}
            description={description}
            key={icon}
          />
        ))}
      </Cards>
    </Container>
  )
);
