import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { HelpSection } from './index';
import { theme } from '@/theme/theme';

export default {
  title: 'Section/Contacts/HelpSection',
  component: HelpSection,
} as ComponentMeta<typeof HelpSection>;

export const Example = (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <HelpSection />
  </ThemeProvider>
);
