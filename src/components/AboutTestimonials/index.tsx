import { useState } from 'react';
import { CardItem, cardItems } from '@/constants/testimonialCards';
import { LeftControlButton } from '@/ui/Buttons/LeftControlButton';
import { RightControlButton } from '@/ui/Buttons/RightControlButton';

import { Buttons, Cards, Container, Heading, Info } from './styled';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';

export const AboutTestimonials = () => {
  const [sliderItems, setSliderItems] = useState(0);

  const handleLeft = () => {
    setSliderItems((prev) => prev - 1);
  };

  const handleRight = () => {
    setSliderItems((prev) => prev - 1);
  };

  return (
    <Container>
      <Info>
        <Heading>What our customers say </Heading>
        <Buttons>
          <LeftControlButton
            disabled={sliderItems === 0}
            onClick={handleLeft}
          />
          <RightControlButton
            disabled={sliderItems + 1 === cardItems.length}
            onClick={handleRight}
          />
        </Buttons>
      </Info>
      <Cards>
        {cardItems
          .slice(sliderItems, sliderItems + 2)
          .map(({ icon, name, profession, description }: CardItem, id) => (
            <TestimonialsCardOpen
              description={description}
              icon={icon}
              name={name}
              key={id}
              profession={profession}
            />
          ))}
      </Cards>
    </Container>
  );
};
