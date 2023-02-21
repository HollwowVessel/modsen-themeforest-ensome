import { memo } from 'react';
import { TeamCard } from 'tired-hollow-lib-modsen';

import { useInfinityScrollItems } from '@/hooks/useInifityScrollItems';

import { Cards, Container } from './styled';

export const Team = memo(() => {
  const items = useInfinityScrollItems();

  return (
    <Container>
      <Cards>
        {items?.map(({ name, profession, photo, social }, id) => (
          <TeamCard
            image={photo}
            name={name}
            profession={profession}
            social={social}
            key={name}
            id={id % 9}
          />
        ))}
      </Cards>
    </Container>
  );
});
