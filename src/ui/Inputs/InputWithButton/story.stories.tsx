import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme/theme';

import { InputWithButton } from './index';
import { InputWithButtonProps } from './types';

export default {
  title: 'Inputs/InputWithButton',
  component: InputWithButton,
} as ComponentMeta<typeof InputWithButton>;

const Template: ComponentStory<typeof InputWithButton> = ({
  placeholder,
}: InputWithButtonProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <InputWithButton placeholder={placeholder} buttonText="Help me" />
    </ThemeProvider>
  </BrowserRouter>
);

export const Enabled = Template.bind({});
Enabled.args = {
  placeholder: 'Enabled',
} as InputWithButtonProps;
