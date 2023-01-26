import { useState } from 'react';
import { BlogCard } from '@/ui/Cards/BlogCard';
import { LeftControlButton } from '@/ui/Buttons/LeftControlButton';
import { RightControlButton } from '@/ui/Buttons/RightControlButton';

import {
  Buttons,
  Cards,
  CardsOpen,
  Container,
  Heading,
  Info,
  ItemLink,
} from './styled';
import { blogArticles } from '@/constants/blogArticle';
import { CarouselProps } from './types';
import { carouselHelper } from '@/utils/carouselHelper';

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
            disabled={sliderItems === blogArticles.length - 1}
            onClick={handleRight}
          />
        </Buttons>
      </Info>
      {type === 'open' ? (
        <CardsOpen>{cardItems}</CardsOpen>
      ) : (
        <Cards>{cardItems}</Cards>
      )}
    </Container>
  );
};
