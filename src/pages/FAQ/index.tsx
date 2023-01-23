import { FAQ } from '@/components/FAQ';
import { FAQDescription } from '@/components/FAQDescription';
import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

export const FAQPage = () => (
  <>
    <Navigation />
    <FAQDescription />
    <FAQ />
    <HelpSection />
    <SubscribeSection />
    <FooterSection />
  </>
);
