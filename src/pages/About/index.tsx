import React from 'react';

import { Navigation } from '@/ui/Navigation';

import { FooterSection } from '@/ui/FooterSection';
import { OverviewSectionOne } from '@/ui/Sections/Overview/OverviewSectionOne';
import { AboutDescription } from '@/components/AboutDescription';
import { About } from '@/components/About';
import { Container, Heading } from '../../containers/AboutContainer/styled';
import { Customers } from '@/components/Customers';

import { ContactsSection } from '@/ui/Sections/Contacts';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { Carousel } from '@/ui/Carousel';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';
import { cardItems } from '@/constants/testimonialCards';

export const AboutPage = () => (
  <>
    <Navigation />
    <AboutDescription />
    <About />
    <Customers />
    <Carousel
      heading="What our customers say"
      Card={TestimonialsCardOpen}
      cards={cardItems}
      type="open"
    />
    <ContactsSection />
    <SubscribeSection />

    <FooterSection />
  </>
);
