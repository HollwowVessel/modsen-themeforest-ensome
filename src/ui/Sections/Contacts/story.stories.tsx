import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { ContactsSection } from './index';
import { theme } from '@/theme/theme';

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
