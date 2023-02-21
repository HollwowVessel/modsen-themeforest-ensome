import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import General from '@/assets/images/icons/general/email.svg';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { WithIconButton } from '.';
import { WithIconButtonProps } from './types';

export default {
  title: 'Button/WithIconButton',
  component: WithIconButton,
} as ComponentMeta<typeof WithIconButton>;

const Template: ComponentStory<typeof WithIconButton> = ({
  icon,
  disabled,
}: WithIconButtonProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <WithIconButton
      disabled={disabled}
      text="Test text in withiconbutton"
      icon={icon}
    />
  </ThemeProvider>
);

export const Enabled = Template.bind({});
Enabled.args = { icon: General, disabled: false };
export const Disabled = Template.bind({});
Disabled.args = { icon: General, disabled: true };
