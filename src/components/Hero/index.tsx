import React, { memo } from 'react';
import { CircleButton } from '@/ui/Buttons/CircleButton';
import hero from '@/assets/images/heroes.png';
import {
  ButtonContainer,
  Container,
  Description,
  Ensome,
  Heading,
  HeroesContainer,
  Image,
  Info,
} from './styled';

export const Hero = memo(() => (
  <Container>
    <Info>
      <Heading>
        Find true power in your data with <Ensome>Ensome</Ensome>
      </Heading>
      <Description>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi.
      </Description>
    </Info>
    <HeroesContainer>
      <ButtonContainer>
        <CircleButton text="Learn more" to="solutions" />
      </ButtonContainer>
      <Image src={hero} />
    </HeroesContainer>
  </Container>
));
