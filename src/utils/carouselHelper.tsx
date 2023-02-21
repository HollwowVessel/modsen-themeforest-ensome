import { blogArticles } from '@/constants/blogArticle';
import { testimonialCards } from '@/constants/testimonialCards';
import { BlogCard } from '@/ui/Cards/BlogCard';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';
import { ItemLink } from '@/ui/Carousel/styled';

export function carouselHelper<
  T extends
    | typeof TestimonialsCard
    | typeof TestimonialsCardOpen
    | typeof BlogCard
>(
  Card: T,
  cards: typeof blogArticles.en | typeof testimonialCards.en,
  type: string,
  sliderItems: number
) {
  if (type === 'blog') {
    const RenderCard = Card as typeof BlogCard;
    return (cards as unknown as typeof blogArticles.en)
      .slice(sliderItems, sliderItems + 3)
      ?.map(({ icon, info, heading, text }, id) => (
        <RenderCard
          date={info}
          heading={heading}
          text={text}
          image={icon}
          key={id}
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
          profession={info}
        />
      ));
  }
  if (type === 'open') {
    const RenderCard = Card as typeof TestimonialsCardOpen;

    return cards
      .slice(sliderItems, sliderItems + 2)
      .map(({ icon, info, heading, text }, id) => (
        <ItemLink to={`/testimonials/${heading.split(' ')[0]}`}>
          <RenderCard
            description={text}
            icon={icon}
            name={heading}
            key={id}
            profession={info}
          />
        </ItemLink>
      ));
  }
}
