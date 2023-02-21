import { ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { HelpSection } from './index';

export default {
  title: 'Section/Contacts/HelpSection',
  component: HelpSection,
} as ComponentMeta<typeof HelpSection>;

export const Example = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HelpSection />
    </ThemeProvider>
  </BrowserRouter>
);
