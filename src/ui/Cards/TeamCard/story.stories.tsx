import { ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useInfinityScrollItems } from '@/hooks/useInifityScrollItems';
import { theme } from '@/theme/theme';

import { TeamCard } from './index';

export default {
  title: 'Cards/TeamCard',
  component: TeamCard,
} as ComponentMeta<typeof TeamCard>;

export const Example = () => {
  const { photo, social } = useInfinityScrollItems()[0];
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TeamCard
          name="Name"
          image={photo}
          profession="Profession"
          social={social}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
};
