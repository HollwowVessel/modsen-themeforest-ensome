import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { RightControlButton } from './index';
import { RightControlButtonProps } from './types';

export default {
  title: 'Button/RightControlButton',
  component: RightControlButton,
} as ComponentMeta<typeof RightControlButton>;

const Template: ComponentStory<typeof RightControlButton> = ({
  disabled,
}: RightControlButtonProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <RightControlButton disabled={disabled} />
  </ThemeProvider>
);

export const Enabled = Template.bind({});
Enabled.args = { disabled: false };
export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
