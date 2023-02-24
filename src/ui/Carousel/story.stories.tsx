import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { blogArticles } from '@/constants/blogArticle';
import { testimonialCards } from '@/constants/testimonialCards';
import { theme } from '@/theme/theme';
import { blogRender, testimonialsRender } from '@/utils/carouselHelper';

import { Carousel } from './index';
import { CarouselProps } from './types';

export default {
  title: 'Section/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = ({
  heading,
  renderer,
  cards,
  type,
}: CarouselProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Carousel
        renderer={renderer}
        cards={cards}
        heading={heading}
        type={type}
      />
    </ThemeProvider>
  </BrowserRouter>
);

export const Testimonial = Template.bind({});
Testimonial.args = {
  renderer: testimonialsRender,
  cards: testimonialCards,
  heading: 'Testimonials',
  type: 'hidden',
} as unknown as CarouselProps;

export const OpenTestimonial = Template.bind({});
OpenTestimonial.args = {
  renderer: testimonialsRender,
  cards: testimonialCards,
  heading: 'OpenTestimonial',
  type: 'open',
} as unknown as CarouselProps;

export const Blog = Template.bind({});
Blog.args = {
  renderer: blogRender,
  cards: blogArticles,
  heading: 'Our blog',
  type: 'blog',
} as unknown as CarouselProps;
