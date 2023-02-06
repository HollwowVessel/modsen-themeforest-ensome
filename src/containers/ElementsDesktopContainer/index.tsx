import React from 'react';
import { Navigation } from '@/ui/Navigation';

import { Team } from '@/components/Team';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { FooterSection } from '@/ui/FooterSection';
import { Container } from './styled';
import { TeamDescription } from '@/components/TeamDescription';

export const ElementsDesktopContainer = () => (
  <Container>
    <Navigation />
    <TeamDescription />
    <Team />
    <SubscribeSection />
    <FooterSection />
  </Container>
);
