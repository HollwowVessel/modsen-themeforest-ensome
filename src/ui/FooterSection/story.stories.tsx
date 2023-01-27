import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';
import { FooterSection } from './index';

export default {
  title: 'Section/FooterSection',
  component: FooterSection,
} as ComponentMeta<typeof FooterSection>;

export const Example = (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <FooterSection />
  </ThemeProvider>
);
