import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme/theme';
import { OverviewSectionFour } from './index';

export default {
  title: 'Section/Overview/OverviewSectionFour',
  component: OverviewSectionFour,
} as ComponentMeta<typeof OverviewSectionFour>;

export const Example = () => (
  <ThemeProvider theme={theme}>
    <OverviewSectionFour />;
  </ThemeProvider>
);
