import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme/theme';

import { ArrowLink } from './index';
import { ArrowLinkProps } from './types';

export default {
  title: 'Link/ArrowLink',
  component: ArrowLink,
} as ComponentMeta<typeof ArrowLink>;

const Template: ComponentStory<typeof ArrowLink> = ({
  text,
}: ArrowLinkProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ArrowLink text={text} />
    </ThemeProvider>
  </BrowserRouter>
);

export const Enabled = Template.bind({});
Enabled.args = {
  text: 'Enabled',
  disabled: false,
} as ArrowLinkProps;
