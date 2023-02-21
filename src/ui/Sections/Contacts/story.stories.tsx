import { ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { ContactsSection } from './index';

export default {
  title: 'Section/Contacts/ContactsSection',
  component: ContactsSection,
} as ComponentMeta<typeof ContactsSection>;

export const Example = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContactsSection />
    </ThemeProvider>
  </BrowserRouter>
);
