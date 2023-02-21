import { useState } from 'react';

import { LeftControlButton } from '@/ui/Buttons/LeftControlButton';
import { RightControlButton } from '@/ui/Buttons/RightControlButton';
import { carouselHelper } from '@/utils/carouselHelper';

import { Buttons, Cards, Container, Heading, Info } from './styled';
import { CarouselProps } from './types';

export const Carousel = ({ heading, Card, cards, type }: CarouselProps) => {
  const [sliderItems, setSliderItems] = useState(0);

  const cardItems = carouselHelper(Card, cards, type, sliderItems);

  const handleLeft = () => {
    setSliderItems((prev) => prev - 1);
  };

  const handleRight = () => {
    setSliderItems((prev) => prev + 1);
  };

  return (
    <Container>
      <Info>
        <Heading>{heading}</Heading>
        <Buttons>
          <LeftControlButton
            disabled={sliderItems === 0}
            onClick={handleLeft}
          />
          <RightControlButton
            disabled={sliderItems === cards.length - 1}
            onClick={handleRight}
          />
        </Buttons>
      </Info>
      {type === 'open' ? (
        <Cards overflow="none" key={sliderItems}>
          {cardItems}
        </Cards>
      ) : (
        <Cards overflow="hidden" key={sliderItems}>
          {cardItems}
        </Cards>
      )}
    </Container>
  );
};
