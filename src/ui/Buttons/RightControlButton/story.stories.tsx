import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RightControlButton } from './index';
import { RightControlButtonProps } from './types';

export default {
  title: 'Button/RightControlButton',
  component: RightControlButton,
} as ComponentMeta<typeof RightControlButton>;

const Template: ComponentStory<typeof RightControlButton> = ({
  disabled,
}: RightControlButtonProps) => <RightControlButton disabled={disabled} />;

export const Enabled = Template.bind({});
Enabled.args = { disabled: false };
export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
