import { FAQ } from '@/components/FAQ';

import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { DescriptionSection } from '@/ui/Sections/DescriptionSection';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

export const FAQPage = () => (
  <>
    <Navigation />
    <DescriptionSection
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam."
      heading="Frequently asked questions"
      name="FAQS"
      link="FAQ"
    />
    <FAQ />
    <HelpSection />
    <SubscribeSection />
    <FooterSection />
  </>
);
