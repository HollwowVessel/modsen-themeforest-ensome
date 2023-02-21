import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LeftControlButton } from './index';
import { LeftControlButtonProps } from './types';

export default {
  title: 'Button/LeftControlButton',
  component: LeftControlButton,
} as ComponentMeta<typeof LeftControlButton>;

const Template: ComponentStory<typeof LeftControlButton> = ({
  disabled,
}: LeftControlButtonProps) => <LeftControlButton disabled={disabled} />;

export const Enabled = Template.bind({});
Enabled.args = { disabled: false };
export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
