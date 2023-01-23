import React from 'react';
import { TeamDescription } from '@/components/TeamDescription';
import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { Team } from '@/components/Team';

export const TeamPage = () => (
  <>
    <Navigation />
    <TeamDescription />
    <Team />
    <SubscribeSection />
    <FooterSection />
  </>
);
