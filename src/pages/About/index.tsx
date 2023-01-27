import { Navigation } from '@/ui/Navigation';

import { FooterSection } from '@/ui/FooterSection';
import { OverviewSectionOne } from '@/ui/Sections/Overview/OverviewSectionOne';

import { About } from '@/components/About';
import { Container, Heading } from '@/containers/AboutContainer/styled';
import { Customers } from '@/components/Customers';

import { ContactsSection } from '@/ui/Sections/Contacts';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { Carousel } from '@/ui/Carousel';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';
import { cardItems } from '@/constants/testimonialCards';
import { SecondDescriptionSection } from '@/ui/Sections/SecondDescriptionSection';
import { AboutContainer } from '@/containers/AboutContainer';

export const AboutPage = () => (
  <>
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
  </>
);
