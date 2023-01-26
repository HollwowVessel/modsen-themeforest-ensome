import React from 'react';
import { Overview } from '@/components/Overview';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

import { ServicesDescription } from '@/components/ServicesDescription';
import { FooterSection } from '@/ui/FooterSection';
import { servicesItems } from '@/constants/servicesCard';
import { SpecialContainer } from '@/containers/SpecialContainer';

export const ServicesPage = () => (
  <>
    <Navigation />
    <ServicesDescription />
    <SpecialContainer cards={servicesItems} />
    <Overview />
    <HelpSection />
    <SubscribeSection />
    <FooterSection />
  </>
);
