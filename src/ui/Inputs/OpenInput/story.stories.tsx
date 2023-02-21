import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme/theme';

import { OpenInput } from './index';
import { OpenInputProps } from './types';

export default {
  title: 'Inputs/OpenInput',
  component: OpenInput,
} as ComponentMeta<typeof OpenInput>;

const Template: ComponentStory<typeof OpenInput> = ({
  placeholder,
}: OpenInputProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <OpenInput placeholder={placeholder} />
    </ThemeProvider>
  </BrowserRouter>
);

export const Enabled = Template.bind({});
Enabled.args = {
  placeholder: 'Enabled',
} as OpenInputProps;
