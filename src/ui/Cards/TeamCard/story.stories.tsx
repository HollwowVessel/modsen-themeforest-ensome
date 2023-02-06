import { ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { TeamCard } from './index';

import { theme } from '@/theme/theme';
import { useInfinityScrollItems } from '@/hooks/useInifityScrollItems';

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
