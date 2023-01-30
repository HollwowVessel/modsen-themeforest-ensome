import { memo } from 'react';
import { Cards, Container } from './styled';
import { SpecialCard } from '@/ui/Cards/SpecialCard';
import { SpecialContainerProps } from './types';

export const SpecialContainer = memo(
  ({ cards, link }: SpecialContainerProps) => (
    <Container>
      <Cards>
        {cards.map(({ img, heading, description, id }) => (
          <SpecialCard
            description={description}
            heading={heading}
            img={img}
            key={img}
            link={link + id}
          />
        ))}
      </Cards>
    </Container>
  )
);
