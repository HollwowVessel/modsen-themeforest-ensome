import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FillButton } from './index';
import { FillButtonProps } from './types';

export default {
  title: 'Button/FillButton',
  component: FillButton,
} as ComponentMeta<typeof FillButton>;

const Template: ComponentStory<typeof FillButton> = ({
  text,
  disabled,
}: FillButtonProps) => <FillButton text={text} disabled={disabled} />;

export const Enabled = Template.bind({});
Enabled.args = { text: 'Just a button :)', disabled: false };
export const Disabled = Template.bind({});
Disabled.args = { text: 'Just a button :)', disabled: true };
