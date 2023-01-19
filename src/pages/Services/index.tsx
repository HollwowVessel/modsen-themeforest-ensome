import React from 'react';
import { Overview } from '@/components/Overview';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { Footer } from '@/ui/FooterSection/styled';

export const ServicesPage = () => (
  <>
    <Navigation />
    <Overview />
    <HelpSection />
    <SubscribeSection />
    <Footer />
  </>
);
