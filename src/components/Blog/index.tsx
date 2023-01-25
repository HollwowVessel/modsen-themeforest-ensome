import { useState } from 'react';
import { BlogCard } from '@/components/BlogCard';
import { cardItems } from '@/constants/testimonialCards';
import { LeftControlButton } from '@/ui/Buttons/LeftControlButton';
import { RightControlButton } from '@/ui/Buttons/RightControlButton';

import { Buttons, Cards, Container, Heading, Info } from './styled';
import { blogArticles } from '@/constants/blogArticle';

export const Blog = () => {
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
        <Heading>Our blog </Heading>
        <Buttons>
          <LeftControlButton
            disabled={sliderItems === 0}
            onClick={handleLeft}
          />
          <RightControlButton
            disabled={sliderItems === cardItems.length - 1}
            onClick={handleRight}
          />
        </Buttons>
      </Info>
      <Cards>
        {blogArticles
          .slice(sliderItems, sliderItems + 3)
          ?.map(({ image, date, text, heading }, id) => (
            <BlogCard
              date={date}
              heading={heading}
              text={text}
              image={image}
              key={id}
              id={id}
            />
          ))}
      </Cards>
    </Container>
  );
};
