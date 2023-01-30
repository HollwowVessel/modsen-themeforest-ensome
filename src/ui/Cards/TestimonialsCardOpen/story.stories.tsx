import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { TestimonialsCardOpen } from './index';
import { TestimonialsCardProps } from './types';
import { theme } from '@/theme/theme';

import { cardItems } from '@/constants/testimonialCards';

export default {
  title: 'Cards/TestimonialsCardOpen',
  component: TestimonialsCardOpen,
} as ComponentMeta<typeof TestimonialsCardOpen>;

const { heading, icon, info, text } = cardItems[0];

const Template: ComponentStory<typeof TestimonialsCardOpen> = ({
  animation,
  description,
  icon,
  name,
  profession,
}: TestimonialsCardProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <TestimonialsCardOpen
        description={description}
        icon={icon}
        name={name}
        profession={profession}
        animation={animation}
      />
    </ThemeProvider>
  </BrowserRouter>
);

export const Enabled = Template.bind({});
Enabled.args = {
  icon,
  name: heading,
  description: text,
  profession: info,
} as unknown as TestimonialsCardProps;
