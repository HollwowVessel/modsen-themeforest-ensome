import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { testimonialCards } from '@/constants/testimonialCards';
import { theme } from '@/theme/theme';

import { TestimonialsCard } from './index';
import { TestimonialsCardProps } from './types';

export default {
  title: 'Cards/TestimonialsCard',
  component: TestimonialsCard,
} as ComponentMeta<typeof TestimonialsCard>;

const { heading, icon, info, text } = testimonialCards.en[0];

const Template: ComponentStory<typeof TestimonialsCard> = ({
  description,
  icon,
  name,
  profession,
}: TestimonialsCardProps) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <TestimonialsCard
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
