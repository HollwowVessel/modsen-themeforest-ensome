import React from 'react';
import {
  Container,
  Description,
  Heading,
  Home,
  Info,
  Links,
  Morbi,
  Sed,
  Team,
} from './styled';

export const TeamDescription = () => (
  <Container>
    <Links>
      <Home to="/">Home</Home>
      <Team to="/">Our team</Team>
    </Links>
    <Info>
      <Heading>Our team</Heading>
      <Description>
        <Sed>
          Sed ut perspiciatis unde omnis iste natus error volupta accusantium
          doloremque laudantium, totam remiga aperiam, eaque ipsa. Phasellus
          tristique eu nisl eu consectetur.
        </Sed>
        <Morbi>
          Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus.
          Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.
          Sed quis lobortis eros. Fusce id commodo libero.
        </Morbi>
      </Description>
    </Info>
  </Container>
);
