import React from 'react';
import { Overview } from '@/components/Overview';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { Services } from '@/components/Services';
import { ServicesDescription } from '@/components/ServicesDescription';
import { FooterSection } from '@/ui/FooterSection';

export const ServicesPage = () => (
  <>
    <Navigation />
    <ServicesDescription />
    <Services />
    <Overview />
    <HelpSection />
    <SubscribeSection />
    <FooterSection />
  </>
);
