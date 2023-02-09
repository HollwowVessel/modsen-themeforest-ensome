import { memo } from 'react';
import { useInfinityScrollItems } from '@/hooks/useInifityScrollItems';
import { TeamCard } from '@/ui/Cards/TeamCard';
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
