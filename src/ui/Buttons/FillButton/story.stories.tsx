import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { FillButton } from './index';
import { FillButtonProps } from './types';

export default {
  title: 'Button/FillButton',
  component: FillButton,
} as ComponentMeta<typeof FillButton>;

const Template: ComponentStory<typeof FillButton> = ({
  text,
  disabled,
}: FillButtonProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <FillButton text={text} disabled={disabled} />
  </ThemeProvider>
);

export const Enabled = Template.bind({});
Enabled.args = { text: 'Enabled', disabled: false };
export const Disabled = Template.bind({});
Disabled.args = { text: 'Disabled', disabled: true };
