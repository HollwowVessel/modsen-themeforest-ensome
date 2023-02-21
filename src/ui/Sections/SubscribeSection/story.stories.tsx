import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { SubscribeSection } from './index';

export default {
  title: 'Section/Contacts/SubscribeSection',
  component: SubscribeSection,
} as ComponentMeta<typeof SubscribeSection>;

export const Example = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SubscribeSection />
  </ThemeProvider>
);
