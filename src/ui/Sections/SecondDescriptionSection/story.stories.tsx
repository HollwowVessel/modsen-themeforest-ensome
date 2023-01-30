import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { SecondDescriptionSection } from './index';
import { theme } from '@/theme/theme';

export default {
  title: 'Section/Contacts/SecondDescriptionSection',
  component: SecondDescriptionSection,
} as ComponentMeta<typeof SecondDescriptionSection>;

export const Example = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SecondDescriptionSection
        description="Test"
        heading="Test"
        link="Test"
        name="Test"
      />
    </ThemeProvider>
  </BrowserRouter>
);
