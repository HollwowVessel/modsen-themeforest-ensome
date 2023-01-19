import { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { createPortal } from 'react-dom';
import { FillButton } from '@/ui/Buttons/FillButton';
import {
  Advantages,
  Buttons,
  Card,
  Container,
  GreyFill,
  Heading,
  Info,
  List,
  Price,
  TimeType,
} from './styled';
import { PricingCardProps } from './types';

export const PricingCard = ({ type, price, options }: PricingCardProps) => {
  const [active, setActive] = useState(0);
  const types = ['Mo', 'Yr'];
  const [showPopup, setShowPopup] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [orderID, setOrderID] = useState(false);

  const createOrder = (data: any, actions: any) =>
    actions.order
      .create({
        purchase_units: [
          {
            description: type,
            amount: {
              currency_code: 'USD',
              value: Number.isNaN(+price.slice(1)) ? price.slice(1) : 0,
            },
          },
        ],
      })
      .then((orderID: boolean) => {
        setOrderID(orderID);
        return orderID;
      });

  const onApprove = (data: any, actions: any) =>
    actions.order.capture().then((details: any) => {
      const { payer } = details;
      setSuccess(true);
    });

  const onError = (err: Record<string, unknown>) => {
    setErrorMessage('An Error occured with your payment ');
  };

  if (showPopup) {
    return createPortal(
      <Container onClick={() => setShowPopup((prev) => !prev)}>
        <GreyFill />
        <Card onClick={(e) => e.stopPropagation()}>
          <Heading>{type}</Heading>
          <Info>
            <Price>{price}</Price>
            <Buttons>
              {types.map((el, id) => (
                <TimeType
                  background={id === active ? '#185CFF' : '#fff'}
                  color={id === active ? '#fff' : '#185CFF'}
                  onClick={() => setActive(id)}
                >
                  {el}
                </TimeType>
              ))}
            </Buttons>
          </Info>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
          <List>
            {options.map((el, id) => (
              <Advantages key={id}>{el}</Advantages>
            ))}
          </List>
        </Card>
      </Container>,
      document.body
    );
  }

  return (
    <Card>
      <Heading>{type}</Heading>
      <Info>
        <Price>{price}</Price>
        <Buttons>
          {types.map((el, id) => (
            <TimeType
              background={id === active ? '#185CFF' : '#fff'}
              color={id === active ? '#fff' : '#185CFF'}
              onClick={() => setActive(id)}
              key={id}
            >
              {el}
            </TimeType>
          ))}
        </Buttons>
      </Info>
      <FillButton
        text="Choose plan"
        onClick={() => setShowPopup((prev) => !prev)}
      />
      <List>
        {options.map((el, id) => (
          <Advantages key={id}>{el}</Advantages>
        ))}
      </List>
    </Card>
  );
};
