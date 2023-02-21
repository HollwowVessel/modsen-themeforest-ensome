import { ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { Navigation } from './index';

export default {
  title: 'Section/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

export const Example = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
    </ThemeProvider>
  </BrowserRouter>
);
