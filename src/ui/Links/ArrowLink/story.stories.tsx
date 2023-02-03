import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ArrowLink } from './index';
import { ArrowLinkProps } from './types';
import { theme } from '@/theme/theme';

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
