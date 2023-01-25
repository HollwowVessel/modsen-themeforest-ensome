import React, { memo } from 'react';
import { BenefitsCard } from '@/components/BenefitsCard';
import { CardItem, cardItems } from '@/constants/benefitsCard';

import { Cards, Container, Description, Heading, Info } from './styled';

export const Benefits = memo(() => (
  <Container>
    <Info>
      <Heading>The benefits of Ensome </Heading>
      <Description>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </Description>
    </Info>
    <Cards>
      {cardItems.map(({ icon, heading, description }: CardItem, id) => (
        <BenefitsCard
          icon={icon}
          heading={heading}
          description={description}
          key={id}
        />
      ))}
    </Cards>
  </Container>
));
