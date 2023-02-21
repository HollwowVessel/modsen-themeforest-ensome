import { blogArticles } from '@/constants/blogArticle';
import { testimonialCards } from '@/constants/testimonialCards';
import { BlogCardProps } from '@/ui/Cards/BlogCard/types';
import { TestimonialsCardProps } from '@/ui/Cards/TestimonialsCard/types';

export interface CarouselProps {
  heading: string;
  Card:
    | (({ image, date, text, heading, id }: BlogCardProps) => JSX.Element)
    | (({
        icon,
        name,
        profession,
        description,
      }: TestimonialsCardProps) => JSX.Element);
  cards: typeof blogArticles.en | typeof testimonialCards.en;
  type: string;
}

export interface CardProp {
  overflow: 'none' | 'hidden';
}
