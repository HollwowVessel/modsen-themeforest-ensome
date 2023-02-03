import { About } from '@/components/About';
import { Customers } from '@/components/Customers';
import { Carousel } from '@/ui/Carousel';
import { FooterSection } from '@/ui/FooterSection';
import { ContactsSection } from '@/ui/Sections/Contacts';
import { SecondDescriptionSection } from '@/ui/Sections/SecondDescriptionSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { AboutContainer } from '../AboutContainer';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { cardItems } from '@/constants/testimonialCards';
import { AboutDesktopSection } from './styled';
import { Navigation } from '@/ui/Navigation';

export const AboutDesktopContainer = () => (
  <AboutDesktopSection>
    <Navigation />
    <SecondDescriptionSection heading="About Us" link="about" name="About us" />
    <About />
    <AboutContainer />
    <Customers />
    <Carousel
      heading="What our customers say"
      Card={TestimonialsCardOpen as typeof TestimonialsCard}
      cards={cardItems}
      type="open"
    />
    <ContactsSection />
    <SubscribeSection />
    <FooterSection />
  </AboutDesktopSection>
);
