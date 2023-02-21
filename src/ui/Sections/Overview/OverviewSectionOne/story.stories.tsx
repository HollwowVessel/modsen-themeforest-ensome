import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { OverviewSectionOne } from './index';

export default {
  title: 'Section/Overview/OverviewSectionOne',
  component: OverviewSectionOne,
} as ComponentMeta<typeof OverviewSectionOne>;

export const Example = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <OverviewSectionOne />
  </ThemeProvider>
);
