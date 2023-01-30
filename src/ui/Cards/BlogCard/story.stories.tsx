import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { BlogCard } from './index';
import { BlogCardProps } from './types';
import { theme } from '@/theme/theme';
import { blogArticles } from '@/constants/blogArticle';

export default {
  title: 'Cards/BlogCard',
  component: BlogCard,
} as ComponentMeta<typeof BlogCard>;

const props = blogArticles[0];

const Template: ComponentStory<typeof BlogCard> = ({
  date,
  heading,
  id,
  image,
  tags,
  text,
}: BlogCardProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <BlogCard
        date={date}
        heading={heading}
        id={id}
        image={image}
        tags={tags}
        text={text}
      />
    </ThemeProvider>
  </BrowserRouter>
);

export const Enabled = Template.bind({});
Enabled.args = {
  ...props,
} as unknown as BlogCardProps;
