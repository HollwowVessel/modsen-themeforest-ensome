import React, { memo, useEffect, useState } from 'react';
import { useInfinityScrollItems } from '../../hooks/useInifityScrollItems';
import { TeamCard } from '@/components/TeamCard';
import { Cards, Container } from './styled';
import { teamCards } from '@/constants/teamCards';

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
            key={id}
          />
        ))}
      </Cards>
    </Container>
  );
});
