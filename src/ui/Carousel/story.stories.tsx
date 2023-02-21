import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { blogArticles } from '@/constants/blogArticle';
import { testimonialCards } from '@/constants/testimonialCards';
import { theme } from '@/theme/theme';
import { BlogCard } from '@/ui/Cards/BlogCard';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';

import { Carousel } from './index';
import { CarouselProps } from './types';

export default {
  title: 'Section/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = ({
  heading,
  Card,
  cards,
  type,
}: CarouselProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Carousel Card={Card} cards={cards} heading={heading} type={type} />
    </ThemeProvider>
  </BrowserRouter>
);

export const Testimonial = Template.bind({});
Testimonial.args = {
  Card: TestimonialsCard,
  cards: testimonialCards,
  heading: 'Testimonials',
  type: 'close',
} as unknown as CarouselProps;

export const OpenTestimonial = Template.bind({});
OpenTestimonial.args = {
  Card: TestimonialsCardOpen,
  cards: testimonialCards,
  heading: 'OpenTestimonial',
  type: 'open',
} as unknown as CarouselProps;

export const Blog = Template.bind({});
Blog.args = {
  Card: BlogCard,
  cards: blogArticles,
  heading: 'Our blog',
  type: 'blog',
} as unknown as CarouselProps;
