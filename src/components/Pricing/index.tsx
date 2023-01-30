import { memo } from 'react';
import { PricingCard } from '@/components/PricingCard';
import { Cards, Container, Heading } from './styled';
import { pricingCards } from '@/constants/pricingCards';

export const Pricing = memo(() => (
  <Container>
    <Heading>Our pricing</Heading>
    <Cards>
      {pricingCards.map(({ type, price, options }) => (
        <PricingCard price={price} options={options} type={type} key={type} />
      ))}
    </Cards>
  </Container>
));
