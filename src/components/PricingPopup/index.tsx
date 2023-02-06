import { PayPalButtons } from '@paypal/react-paypal-js';
import { createPortal } from 'react-dom';
import { createPaypalOrder } from '@/api/paypalApi';
import {
  Advantages,
  Card,
  Container,
  GreyFill,
  Heading,
  Info,
  List,
  Price,
} from './styled';
import { PricingPopupProps } from './types';

export const PricingPopup = ({
  handlePopup,
  handleCardClick,
  type,
  money,
  options,
}: PricingPopupProps) =>
  createPortal(
    <Container onClick={handlePopup}>
      <GreyFill />
      <Card onClick={handleCardClick}>
        <Heading>{type}</Heading>
        <Info>
          <Price>${money}</Price>
        </Info>
        <PayPalButtons createOrder={createPaypalOrder(money, type)} />
        <List>
          {options.map((el) => (
            <Advantages key={el}>{el}</Advantages>
          ))}
        </List>
      </Card>
    </Container>,
    document.body
  );
