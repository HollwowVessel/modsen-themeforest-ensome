import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CircleButton } from './index';
import { CircleButtonProps } from './types';

export default {
  title: 'Button/CircleButton',
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = ({
  text,
  disabled,
}: CircleButtonProps) => <CircleButton text={text} disabled={disabled} />;

export const Enabled = Template.bind({});
Enabled.args = {
  text: 'Enabled',
  disabled: false,
} as CircleButtonProps;
export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true,
} as CircleButtonProps;
