import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { FillButtonLink } from './index';
import { FillButtonProps } from './types';
import { theme } from '@/theme/theme';

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
