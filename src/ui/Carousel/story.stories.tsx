import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Carousel } from './index';
import { CarouselProps } from './types';
import { theme } from '@/theme/theme';
import { blogArticles } from '@/constants/blogArticle';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { cardItems } from '@/constants/testimonialCards';
import { BlogCard } from '@/ui/Cards/BlogCard';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';

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
  cards: cardItems,
  heading: 'Testimonials',
  type: 'close',
} as unknown as CarouselProps;

export const OpenTestimonial = Template.bind({});
OpenTestimonial.args = {
  Card: TestimonialsCardOpen,
  cards: cardItems,
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
