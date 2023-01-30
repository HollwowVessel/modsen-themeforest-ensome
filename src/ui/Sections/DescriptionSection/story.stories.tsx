import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { DescriptionSection } from './index';
import { theme } from '@/theme/theme';

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
