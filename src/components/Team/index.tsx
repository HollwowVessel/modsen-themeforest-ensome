import React from 'react';
import { TeamCard } from '@/components/TeamCard';
import { Cards, Container } from './styled';
import { teamCards } from '@/constants/teamCards';

export const Team = () => (
  <Container>
    <Cards>
      {teamCards.map(({ name, profession, photo }, id) => (
        <TeamCard image={photo} name={name} profession={profession} />
      ))}
    </Cards>
  </Container>
);
