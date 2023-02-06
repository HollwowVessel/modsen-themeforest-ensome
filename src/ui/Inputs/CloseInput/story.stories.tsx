import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { CloseInput } from './index';
import { CloseInputProps } from './types';
import { theme } from '@/theme/theme';

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
