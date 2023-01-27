import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { Map } from '@/components/Map';
import { ContactsDescription } from '@/components/ContactsDescription';

export const ContactsPage = () => (
  <>
    <Navigation />
    <ContactsDescription />
    <Map />
    <FooterSection />
  </>
);
