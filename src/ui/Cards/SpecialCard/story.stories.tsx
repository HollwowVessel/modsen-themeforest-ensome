import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { SpecialCard } from './index';
import { SpecialCardProps } from './types';
import { theme } from '@/theme/theme';
import { blogArticles } from '@/constants/blogArticle';

export default {
  title: 'Cards/SpecialCard',
  component: SpecialCard,
} as ComponentMeta<typeof SpecialCard>;

export const Example = ({
  img,
  heading,
  description,
  link,
}: SpecialCardProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <SpecialCard description="Help me" heading="Help me" link="/" img="" />
    </ThemeProvider>
  </BrowserRouter>
);
