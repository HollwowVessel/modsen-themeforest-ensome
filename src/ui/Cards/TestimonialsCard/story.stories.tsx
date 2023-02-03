import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { TestimonialsCard } from './index';
import { TestimonialsCardProps } from './types';
import { theme } from '@/theme/theme';

import { cardItems } from '@/constants/testimonialCards';

export default {
  title: 'Cards/TestimonialsCard',
  component: TestimonialsCard,
} as ComponentMeta<typeof TestimonialsCard>;

const { heading, icon, info, text } = cardItems[0];

const Template: ComponentStory<typeof TestimonialsCard> = ({
  animation,
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
