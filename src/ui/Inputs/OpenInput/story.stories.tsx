import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { OpenInput } from './index';
import { OpenInputProps } from './types';
import { theme } from '@/theme/theme';

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
