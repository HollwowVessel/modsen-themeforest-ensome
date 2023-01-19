import React from 'react';

import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { FooterSection } from '@/ui/FooterSection';
import { Benefits } from '@/components/Benefits';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Blog } from '@/components/Blog';
import { Overview } from '@/components/Overview';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/ui/Navigation';

export const HomePage = () => (
  <>
    <Navigation />
    <Hero />
    <Features />
    <Overview />
    <Benefits />
    <Testimonials />
    <Pricing />
    <Blog />
    <HelpSection />
    <SubscribeSection />
    <FooterSection />
  </>
);
