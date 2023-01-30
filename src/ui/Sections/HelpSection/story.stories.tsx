import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { HelpSection } from './index';
import { theme } from '@/theme/theme';

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
