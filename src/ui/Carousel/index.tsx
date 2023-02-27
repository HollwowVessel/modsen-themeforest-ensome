import { useState } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { LeftControlButton } from '@/ui/Buttons/LeftControlButton';
import { RightControlButton } from '@/ui/Buttons/RightControlButton';
import { sliceCarouselHelper } from '@/utils/carouselHelper';

import { FlatList } from '../FlatList';
import { Buttons, Cards, Container, Heading, Info } from './styled';
import { CarouselProps } from './types';

export const Carousel = ({ heading, renderer, cards, type }: CarouselProps) => {
  const [sliderItems, setSliderItems] = useState(0);

  const { isTablet, isMobile } = useMediaQuery();

  const handleLeft = () => {
    setSliderItems((prev) => prev - 1);
  };

  const handleRight = () => {
    setSliderItems((prev) => prev + 1);
  };

  const cardItems = sliceCarouselHelper(cards, isMobile, isTablet, sliderItems);

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
        <FlatList renderer={renderer} items={cardItems} type={type} />
      </Cards>
    </Container>
  );
};
