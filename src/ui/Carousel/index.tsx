import { useState } from 'react';

import { LeftControlButton } from '@/ui/Buttons/LeftControlButton';
import { RightControlButton } from '@/ui/Buttons/RightControlButton';

import { FlatList } from '../FlatList';
import { Buttons, Cards, Container, Heading, Info } from './styled';
import { CarouselProps } from './types';

export const Carousel = ({ heading, renderer, cards, type }: CarouselProps) => {
  const [sliderItems, setSliderItems] = useState(0);

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

      <Cards overflow={type} key={sliderItems}>
        <FlatList
          renderer={renderer}
          items={cards.slice(sliderItems, sliderItems + 3)}
          type={type}
        />
      </Cards>
    </Container>
  );
};
