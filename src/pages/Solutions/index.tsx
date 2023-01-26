import React from 'react';

import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { SolutionsDescription } from '@/components/SolutionsDescription';
import { SolutionsChoose } from '@/components/SolutionsChoose';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { cardItems } from '@/constants/testimonialCards';
import { Carousel } from '@/ui/Carousel';
import { solutionsItems } from '@/constants/solutions';
import { SpecialContainer } from '@/containers/SpecialContainer';

export const SolutionsPage = () => (
  <>
    <Navigation />
    <SolutionsDescription />
    <SpecialContainer cards={solutionsItems} />
    <SolutionsChoose />
    <Carousel
      Card={TestimonialsCard}
      cards={cardItems}
      heading="Testimonials"
      type="close"
    />
    <HelpSection />
    <FooterSection />
  </>
);
