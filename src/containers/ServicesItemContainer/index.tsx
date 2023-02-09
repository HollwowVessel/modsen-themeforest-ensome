import { ServicesItemDescription } from '@/components/ServicesItemDescription';
import { Container } from './styled';
import { ServicesSidebar } from '@/components/ServicesSidebar';

export const ServicesItemContainer = () => (
  <Container>
    <ServicesItemDescription />
    <ServicesSidebar />
  </Container>
);
