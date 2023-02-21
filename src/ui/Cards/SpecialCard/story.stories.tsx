import { ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme/theme';

import { SpecialCard } from './index';

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
