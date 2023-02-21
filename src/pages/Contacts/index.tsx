import { ContactsDescription } from '@/components/ContactsDescription';
import { Map } from '@/components/Map';
import { Layout } from '@/containers/Layout';

export const ContactsPage = () => (
  <Layout>
    <ContactsDescription />
    <Map />
  </Layout>
);
