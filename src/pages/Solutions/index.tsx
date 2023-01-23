import React from 'react';

import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { Solutions } from '@/components/Solutions';
import { Testimonials } from '@/components/Testimonials';
import { SolutionsDescription } from '@/components/SolutionsDescription';
import { SolutionsChoose } from '@/components/SolutionsChoose';

export const SolutionsPage = () => (
  <>
    <Navigation />
    <SolutionsDescription />
    <Solutions />
    <SolutionsChoose />
    <Testimonials />
    <HelpSection />
    <FooterSection />
  </>
);
