import React from 'react';

import { Navigation } from '@/ui/Navigation';

import { FooterSection } from '@/ui/FooterSection';
import { OverviewSectionOne } from '@/ui/Sections/Overview/OverviewSectionOne';

export const AboutPage = () => (
  <>
    <Navigation />
    <OverviewSectionOne />
    <FooterSection />
  </>
);
