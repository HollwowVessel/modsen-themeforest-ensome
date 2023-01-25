import React, { memo } from 'react';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import { Cards, Container } from './styled';
import { SolutionsCard } from '@/components/SolutionsCard';
import { solutionsItems } from '@/constants/solutions';

export const Solutions = memo(() => (
  <Container>
    <Cards>
      {solutionsItems.map(({ img, heading, description, id }) => (
        <SolutionsCard
          description={description}
          heading={heading}
          img={img}
          key={id}
          link={`/solutions/${id}`}
        />
      ))}
    </Cards>
  </Container>
));