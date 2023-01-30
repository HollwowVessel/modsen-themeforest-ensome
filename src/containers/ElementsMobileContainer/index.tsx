import React from 'react';
import { Navigation } from '@/ui/Navigation';
import { DescriptionSection } from '@/ui/Sections/DescriptionSection';
import { Team } from '@/components/Team';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { FooterSection } from '@/ui/FooterSection';
import { Container } from './styled';
import { TeamCloser } from '@/components/TeamCloser';

export const ElementsMobileContainer = () => (
  <Container>
    <Navigation />
    <DescriptionSection
      description=""
      heading=""
      link="elements"
      name="Our team"
    />
    <TeamCloser />
    <Team />
    <SubscribeSection />
    <FooterSection />
  </Container>
);
