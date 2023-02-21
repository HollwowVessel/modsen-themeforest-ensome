import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme/theme';

import { FillButtonLink } from './index';
import { FillButtonProps } from './types';

export default {
  title: 'Link/FillButtonLink',
  component: FillButtonLink,
} as ComponentMeta<typeof FillButtonLink>;

const Template: ComponentStory<typeof FillButtonLink> = ({
  text,
}: FillButtonProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <FillButtonLink text={text} />
    </ThemeProvider>
  </BrowserRouter>
);

export const Enabled = Template.bind({});
Enabled.args = {
  text: 'Enabled',
  disabled: false,
} as FillButtonProps;
