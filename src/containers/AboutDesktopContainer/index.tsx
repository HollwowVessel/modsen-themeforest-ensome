import React from 'react';
import { About } from '@/components/About';
import { Customers } from '@/components/Customers';
import { Carousel } from '@/ui/Carousel';
import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { ContactsSection } from '@/ui/Sections/Contacts';
import { SecondDescriptionSection } from '@/ui/Sections/SecondDescriptionSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { AboutContainer } from '../AboutContainer';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';
import { cardItems } from '@/constants/testimonialCards';
import { AboutDesktopSection } from './styled';

export const AboutDesktopContainer = () => (
  <AboutDesktopSection>
    <Navigation />
    <SecondDescriptionSection heading="About Us" link="about" name="About us" />
    <About />
    <AboutContainer />
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
  </AboutDesktopSection>
);
