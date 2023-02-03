import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { SpecialCard } from './index';
import { theme } from '@/theme/theme';

export default {
  title: 'Cards/SpecialCard',
  component: SpecialCard,
} as ComponentMeta<typeof SpecialCard>;

export const Example = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <SpecialCard description="Help me" heading="Help me" link="/" img="" />
    </ThemeProvider>
  </BrowserRouter>
);
