import { Keyframes } from 'styled-components';
import { CardProps } from '@/types/cardTypes';

import { ItemLink } from '@/ui/Carousel/styled';
import { BlogArticleI } from '@/types/blogTypes';
import { cardItems } from '@/constants/testimonialCards';
import { blogArticles } from '@/constants/blogArticle';

export const carouselHelper = (
  Card: any,
  cards: typeof blogArticles | typeof cardItems,
  type: string,
  sliderItems: number,
  animation: Keyframes
) => {
  if (type === 'blog') {
    return (cards as typeof blogArticles)
      .slice(sliderItems, sliderItems + 3)
      ?.map(({ icon, info, heading, text, tags }, id) => (
        <Card
          date={info}
          heading={heading}
          text={text}
          image={icon}
          key={id}
          animation={animation}
          id={id}
          tags={tags}
        />
      ));
  }
  if (type === 'close') {
    return cards
      .slice(sliderItems, sliderItems + 3)
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
  if (type === 'open') {
    return cards
      .slice(sliderItems, sliderItems + 2)
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
};
