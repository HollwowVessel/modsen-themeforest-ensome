import { TestimonialsCard } from 'components/TestimonialsCard';
import { CardItem, cardItems } from 'constants/testimonialCards';
import React from 'react';
import { LeftControlButton } from 'ui/Buttons/LeftControlButton';
import { RightControlButton } from 'ui/Buttons/RightControlButton';
import { getPhoto } from 'utils/getPhoto';
import { Buttons, Cards, Container, Heading, Info } from './styled';

export const Testimonials = () => (
  <Container>
    <Info>
      <Heading>Testimonials </Heading>
      <Buttons>
        <LeftControlButton disabled />
        <RightControlButton />
      </Buttons>
    </Info>
    <Cards>
      {cardItems.map(
        ({ icon, name, profession, description }: CardItem, id) => (
          <TestimonialsCard
            description={description}
            icon={getPhoto(icon)}
            name={name}
            key={id}
            profession={profession}
          />
        )
      )}
    </Cards>
  </Container>
);
