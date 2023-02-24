import { blogArticles } from '@/constants/blogArticle';
import { testimonialCards } from '@/constants/testimonialCards';

export interface CarouselProps {
  heading: string;
  renderer: (arg0: any) => void;
  cards: typeof blogArticles.en | typeof testimonialCards.en;
  type: 'open' | 'hidden';
}

export interface CardProp {
  overflow: 'open' | 'hidden';
}
