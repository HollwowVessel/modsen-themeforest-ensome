import { ComponentMeta } from '@storybook/react';
import { GlobalStyles } from '../../../../GlobalStyles';
import { OverviewSectionOne } from './index';

export default {
  title: 'Section/Overview/OverviewSectionOne',
  component: OverviewSectionOne,
} as ComponentMeta<typeof OverviewSectionOne>;

export const Example = (
  <>
    <GlobalStyles />
    <OverviewSectionOne />
  </>
);
