import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { OverviewSectionOne } from './index';
import { theme } from '@/theme/theme';

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
