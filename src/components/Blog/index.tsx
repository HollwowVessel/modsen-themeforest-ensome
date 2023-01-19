import { useState } from 'react';
import { BlogArticle } from '@/components/BlogArticle';
import { CardItem, cardItems } from '@/constants/testimonialCards';
import { LeftControlButton } from '@/ui/Buttons/LeftControlButton';
import { RightControlButton } from '@/ui/Buttons/RightControlButton';

import { Buttons, Cards, Container, Heading, Info } from './styled';

export const Blog = () => {
  const [sliderItems, setSliderItems] = useState(0);
  return (
    <Container>
      <Info>
        <Heading>Our blog </Heading>
        <Buttons>
          <LeftControlButton
            disabled={sliderItems === 0}
            onClick={() => setSliderItems((prev) => prev - 1)}
          />
          <RightControlButton
            disabled={sliderItems === cardItems.length - 1}
            onClick={() => setSliderItems((prev) => prev + 1)}
          />
        </Buttons>
      </Info>
      <Cards>
        {cardItems
          .slice(sliderItems, sliderItems + 3)
          ?.map(({ icon, name, profession, description }: CardItem, id) => (
            <BlogArticle />
          ))}
      </Cards>
    </Container>
  );
};
