import { Keyframes } from 'styled-components';
import { CardItem, CardProps } from '@/types/cardTypes';

import { ItemLink } from '@/ui/Carousel/styled';

export const carouselHelper = (
  Card: any,
  cards: CardProps[] | CardItem[],
  type: string,
  sliderItems: number,
  animation: Keyframes
) => {
  if (type === 'blog') {
    return cards
      .slice(sliderItems, sliderItems + 3)
      ?.map(({ icon, info, heading, text }, id) => (
        <Card
          date={info}
          heading={heading}
          text={text}
          image={icon}
          key={id}
          animation={animation}
          id={id}
        />
      ));
  }
  if (type === 'close') {
    return cards
      .slice(sliderItems, sliderItems + 3)
      .map(({ icon, info, heading, text }, id) => (
        <ItemLink to={`/testimonials/${id}`}>
          <Card
            description={text}
            icon={icon}
            name={heading}
            key={id}
            animation={animation}
            profession={info}
          />
        </ItemLink>
      ));
  }
  if (type === 'open') {
    return cards
      .slice(sliderItems, sliderItems + 2)
      .map(({ icon, info, heading, text }, id) => (
        <Card
          description={text}
          icon={icon}
          name={heading}
          key={id}
          animation={animation}
          profession={info}
        />
      ));
  }
};
