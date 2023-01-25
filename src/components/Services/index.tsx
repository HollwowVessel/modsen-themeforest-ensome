import React, { memo } from 'react';

import { SolutionsCard } from '../SolutionsCard';
import { Cards, Container } from './styled';
import { servicesItems } from '@/constants/servicesCard';

export const Services = memo(() => (
  <Container>
    <Cards>
      {servicesItems.map(({ img, heading, description }, id) => (
        <SolutionsCard
          description={description}
          heading={heading}
          img={img}
          key={id}
          link={`/services/${id}`}
        />
      ))}
    </Cards>
  </Container>
));
