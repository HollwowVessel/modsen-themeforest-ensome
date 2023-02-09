import { Keyframes } from 'styled-components';

import { ItemLink } from '@/ui/Carousel/styled';
import { cardItems } from '@/constants/testimonialCards';
import { blogArticles } from '@/constants/blogArticle';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';
import { BlogCard } from '@/ui/Cards/BlogCard';

export function carouselHelper<
  T extends
    | typeof TestimonialsCard
    | typeof TestimonialsCardOpen
    | typeof BlogCard
>(
  Card: T,
  cards: typeof blogArticles | typeof cardItems,
  type: string,
  sliderItems: number,
  animation: Keyframes
) {
  if (type === 'blog') {
    const RenderCard = Card as typeof BlogCard;
    return (cards as typeof blogArticles)
      .slice(sliderItems, sliderItems + 3)
      ?.map(({ icon, info, heading, text }, id) => (
        <RenderCard
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
    const RenderCard = Card as typeof TestimonialsCard;

    return cards
      .slice(sliderItems, sliderItems + 3)
      .map(({ icon, info, heading, text }, id) => (
        <RenderCard
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
    const RenderCard = Card as typeof TestimonialsCardOpen;

    return cards
      .slice(sliderItems, sliderItems + 2)
      .map(({ icon, info, heading, text }, id) => (
        <ItemLink to={`/testimonials/${id}`}>
          <RenderCard
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
}
