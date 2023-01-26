import { ComponentType, MemoExoticComponent } from 'react';
import { CardProps } from 'types/cardTypes';
import { TestimonialCards } from 'types/testimonialTypes';

export interface CarouselProps {
  heading: string;
  Card: any;
  cards: any[];
  type: string;
}
