import { ComponentType, MemoExoticComponent } from 'react';
import { CardItem, CardProps } from 'types/cardTypes';
import { TestimonialCards } from 'types/testimonialTypes';
import { TestimonialsCardProps } from '@/ui/Cards/TestimonialsCard/types';
import { BlogCardProps } from '@/ui/Cards/BlogCard/types';

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
  cards: CardProps[] | CardItem[];
  type: string;
}
