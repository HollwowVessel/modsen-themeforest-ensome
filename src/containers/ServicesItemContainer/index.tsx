import { ServicesItemDescription } from '@/components/ServicesItemDescription';
import { ServicesSidebar } from '@/components/ServicesSidebar';

import { Container } from './styled';

export const ServicesItemContainer = () => (
  <Container>
    <ServicesItemDescription />
    <ServicesSidebar />
  </Container>
);
