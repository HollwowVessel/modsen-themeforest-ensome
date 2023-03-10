import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme/theme';

import { CircleButton } from './index';
import { CircleButtonProps } from './types';

export default {
  title: 'Link/CircleButton',
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = ({
  text,
  disabled,
}: CircleButtonProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CircleButton text={text} disabled={disabled} />
    </ThemeProvider>
  </BrowserRouter>
);

export const Enabled = Template.bind({});
Enabled.args = {
  text: 'Enabled',
  disabled: false,
} as CircleButtonProps;
