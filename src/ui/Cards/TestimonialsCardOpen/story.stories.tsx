import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { testimonialCards } from '@/constants/testimonialCards';
import { theme } from '@/theme/theme';

import { TestimonialsCardOpen } from './index';
import { TestimonialsCardProps } from './types';

export default {
  title: 'Cards/TestimonialsCardOpen',
  component: TestimonialsCardOpen,
} as ComponentMeta<typeof TestimonialsCardOpen>;

const { heading, icon, info, text } = testimonialCards.en[0];

const Template: ComponentStory<typeof TestimonialsCardOpen> = ({
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
