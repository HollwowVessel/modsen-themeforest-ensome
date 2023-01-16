import { PricingCard } from 'components/PricingCard';
import { Cards, Container, Heading } from './styled';

export const Pricing = () => (
  <Container>
    <Heading>Our pricing</Heading>
    <Cards>
      <PricingCard options={[]} price="00" type="Free Trial" />
    </Cards>
  </Container>
);
