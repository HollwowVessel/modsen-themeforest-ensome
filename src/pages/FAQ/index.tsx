import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

export const FAQPage = () => (
  <>
    <Navigation />

    <HelpSection />
    <SubscribeSection />
    <FooterSection />
  </>
);
