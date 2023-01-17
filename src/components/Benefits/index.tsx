import { BenefitsCard } from 'components/BenefitsCard';
import { CardItem, cardItems } from 'constants/benefitsCard';
import React from 'react';
import { getIcon } from 'utils/getIcon';
import { Cards, Container, Description, Heading, Info } from './styled';

export const Benefits = () => (
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
          icon={getIcon(icon)}
          heading={heading}
          description={description}
          key={id}
        />
      ))}
    </Cards>
  </Container>
);
