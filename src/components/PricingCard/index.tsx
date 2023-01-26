import { useMemo, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { createPortal } from 'react-dom';
import { createPaypalOrder } from '../../api/paypalApi';
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
import { MONTH, YEAR } from '@/constants/general';
import { timeTypes } from '@/constants/pricingTimeType';
import { theme } from '../../theme/theme';

export const PricingCard = ({ type, price, options }: PricingCardProps) => {
  const [active, setActive] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  const money = useMemo(
    () =>
      (!Number.isNaN(+price.slice(1)) ? +price.slice(1) : 0) *
      (active ? YEAR : MONTH),
    [active]
  );

  const handleActive = (id: number) => () => {
    setActive(id);
  };

  const handlePopup = () => {
    setShowPopup((prev) => !prev);
  };

  if (showPopup) {
    return createPortal(
      <Container onClick={() => setShowPopup((prev) => !prev)}>
        <GreyFill />
        <Card onClick={(e) => e.stopPropagation()}>
          <Heading>{type}</Heading>
          <Info>
            <Price>${money}</Price>
          </Info>
          <PayPalButtons createOrder={createPaypalOrder(money, type)} />
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
        <Price>{money ? `$${money}` : price}</Price>
        <Buttons>
          {timeTypes.map((el, id) => (
            <TimeType
              background={
                id === active ? theme.colors.primary : theme.colors.white
              }
              color={id === active ? theme.colors.white : theme.colors.primary}
              onClick={handleActive(id)}
              key={id}>
              {el}
            </TimeType>
          ))}
        </Buttons>
      </Info>
      <FillButton text="Choose plan" onClick={handlePopup} />
      <List>
        {options.map((el, id) => (
          <Advantages key={id}>{el}</Advantages>
        ))}
      </List>
    </Card>
  );
};
