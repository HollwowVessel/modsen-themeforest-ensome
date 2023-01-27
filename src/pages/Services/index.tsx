import { Overview } from '@/components/Overview';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

import { FooterSection } from '@/ui/FooterSection';
import { servicesItems } from '@/constants/servicesCard';
import { SpecialContainer } from '@/containers/SpecialContainer';
import { DescriptionSection } from '@/ui/Sections/DescriptionSection';

export const ServicesPage = () => (
  <>
    <Navigation />
    <DescriptionSection
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo
      inventore."
      heading="Data Analytics Services"
      name="Services"
      link="services"
    />
    <SpecialContainer cards={servicesItems} link="/services/" />
    <Overview />
    <HelpSection />
    <SubscribeSection />
    <FooterSection />
  </>
);
