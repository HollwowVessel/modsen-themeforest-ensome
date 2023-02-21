import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme/theme';

import { CloseInput } from './index';
import { CloseInputProps } from './types';

export default {
  title: 'Inputs/CloseInput',
  component: CloseInput,
} as ComponentMeta<typeof CloseInput>;

const Template: ComponentStory<typeof CloseInput> = ({
  placeholder,
}: CloseInputProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CloseInput placeholder={placeholder} />
    </ThemeProvider>
  </BrowserRouter>
);

export const Enabled = Template.bind({});
Enabled.args = {
  placeholder: 'Enabled',
} as CloseInputProps;
