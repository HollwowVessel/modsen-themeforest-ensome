import { Navigation } from '@/ui/Navigation';
import { DescriptionSection } from '@/ui/Sections/DescriptionSection';
import { OverviewSectionFour } from '@/ui/Sections/Overview/OverviewSectionFour';
import { Benefits } from '@/components/Benefits';
import { Carousel } from '@/ui/Carousel';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { FooterSection } from '@/ui/FooterSection';
import { cardItems } from '@/constants/testimonialCards';
import AboutMobile from '@/assets/images/aboutMobile.png';
import { AboutMobileSection, Description, Heading, Image } from './styled';
import { AboutOverview } from '@/components/AboutOverview';

export const AboutMobileContainer = () => (
  <AboutMobileSection>
    <Navigation />
    <DescriptionSection
      description=""
      heading=""
      link="/about"
      name="About us"
    />
    <Heading>We work with 15 years of experience</Heading>
    <Description>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
    </Description>
    <Image src={AboutMobile} />
    <AboutOverview />
    <Benefits
      description="Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      heading="Why our clients chosse Ensome?"
    />
    <Carousel
      Card={TestimonialsCard}
      cards={cardItems}
      heading="Testimonials"
      type="close"
    />
    <HelpSection />
    <SubscribeSection />
    <FooterSection />
  </AboutMobileSection>
);
