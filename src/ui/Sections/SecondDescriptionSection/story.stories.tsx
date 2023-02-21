import { ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { SecondDescriptionSection } from './index';

export default {
  title: 'Section/Contacts/SecondDescriptionSection',
  component: SecondDescriptionSection,
} as ComponentMeta<typeof SecondDescriptionSection>;

export const Example = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SecondDescriptionSection heading="Test" />
    </ThemeProvider>
  </BrowserRouter>
);
