import React from 'react';

import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { Solutions } from '@/components/Solutions';
import { Testimonials } from '@/components/Testimonials';

export const SolutionsPage = () => (
  <>
    <Navigation />

    <Solutions />
    <Testimonials />
    <HelpSection />
    <FooterSection />
  </>
);
