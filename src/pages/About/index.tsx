import React from 'react';

import { Navigation } from '@/ui/Navigation';

import { FooterSection } from '@/ui/FooterSection';
import { OverviewSectionOne } from '@/ui/Sections/Overview/OverviewSectionOne';
import { AboutDescription } from '@/components/AboutDescription';
import { About } from '@/components/About';
import { Container, Heading } from './styled';
import { Customers } from '@/components/Customers';
import { AboutTestimonials } from '@/components/AboutTestimonials';
import { ContactsSection } from '@/ui/Sections/Contacts';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { SubscribeSectionBlue } from '@/ui/Sections/SubscribeSectionBlue';

export const AboutPage = () => (
  <>
    <Navigation />
    <AboutDescription />
    <About />
    <Container>
      <Heading>Ensome in numbers</Heading>
      <OverviewSectionOne />
    </Container>
    <Customers />
    <AboutTestimonials />
    <ContactsSection />
    <SubscribeSection />
    <SubscribeSectionBlue />
    <FooterSection />
  </>
);
