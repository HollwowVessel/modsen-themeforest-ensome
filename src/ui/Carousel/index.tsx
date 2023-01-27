import { useEffect, useRef, useState } from 'react';
import { Keyframes } from 'styled-components';

import { LeftControlButton } from '@/ui/Buttons/LeftControlButton';
import { RightControlButton } from '@/ui/Buttons/RightControlButton';

import { Buttons, Cards, CardsOpen, Container, Heading, Info } from './styled';
import { blogArticles } from '@/constants/blogArticle';
import { CarouselProps } from './types';
import { carouselHelper } from '@/utils/carouselHelper';
import { slideAnimationIn, slideAnimationOut } from '@/theme/animations';

export const Carousel = ({ heading, Card, cards, type }: CarouselProps) => {
  const [sliderItems, setSliderItems] = useState(0);
  const [animation, setAnimation] = useState<Keyframes | null>(null);

  const animationRef = useRef<null | NodeJS.Timeout>(null);

  const cardItems = carouselHelper(
    Card,
    cards,
    type,
    sliderItems,
    animation as Keyframes
  );

  const handleLeft = () => {
    setSliderItems((prev) => prev - 1);
    setAnimation(slideAnimationOut);
    animationRef.current = setTimeout(() => setAnimation(null), 500);
  };

  const handleRight = () => {
    setSliderItems((prev) => prev + 1);
    setAnimation(slideAnimationIn);

    animationRef.current = setTimeout(() => setAnimation(null), 500);
  };

  useEffect(
    () => () => clearTimeout(animationRef.current as NodeJS.Timeout),
    []
  );

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
            disabled={sliderItems === blogArticles.length - 3}
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
