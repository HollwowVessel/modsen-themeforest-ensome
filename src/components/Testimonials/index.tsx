import { useState } from 'react';
import { TestimonialsCard } from '@/components/TestimonialsCard';
import { CardItem, cardItems } from '@/constants/testimonialCards';
import { LeftControlButton } from '@/ui/Buttons/LeftControlButton';
import { RightControlButton } from '@/ui/Buttons/RightControlButton';

import { Buttons, Cards, Container, Heading, Info } from './styled';

export const Testimonials = () => {
  const [sliderItems, setSliderItems] = useState(0);

  return (
    <Container>
      <Info>
        <Heading>Testimonials </Heading>
        <Buttons>
          <LeftControlButton
            disabled={sliderItems === 0}
            onClick={() => setSliderItems((prev) => prev - 1)}
          />
          <RightControlButton
            disabled={sliderItems + 1 === cardItems.length}
            onClick={() => setSliderItems((prev) => prev + 1)}
          />
        </Buttons>
      </Info>
      <Cards>
        {cardItems
          .slice(sliderItems, sliderItems + 3)
          .map(({ icon, name, profession, description }: CardItem, id) => (
            <TestimonialsCard
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
