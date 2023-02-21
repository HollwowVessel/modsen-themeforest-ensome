import { ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { DescriptionSection } from './index';

export default {
  title: 'Section/Contacts/DescriptionSection',
  component: DescriptionSection,
} as ComponentMeta<typeof DescriptionSection>;

export const Example = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DescriptionSection
        description="Test"
        heading="Test"
        link="Test"
        name="Test"
      />
    </ThemeProvider>
  </BrowserRouter>
);
