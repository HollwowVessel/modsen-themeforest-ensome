import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { blogArticles } from '@/constants/blogArticle';
import { theme } from '@/theme/theme';

import { BlogCard } from './index';
import { BlogCardProps } from './types';

export default {
  title: 'Cards/BlogCard',
  component: BlogCard,
} as ComponentMeta<typeof BlogCard>;

const props = blogArticles.en[1];

const Template: ComponentStory<typeof BlogCard> = ({
  date,
  heading,
  id,
  image,

  text,
}: BlogCardProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <BlogCard
        date={date}
        heading={heading}
        id={id}
        image={image}
        text={text}
      />
    </ThemeProvider>
  </BrowserRouter>
);

export const Enabled = Template.bind({});
Enabled.args = {
  ...props,
} as unknown as BlogCardProps;
