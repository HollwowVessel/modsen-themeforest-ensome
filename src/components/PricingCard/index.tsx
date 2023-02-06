import { MouseEvent, useMemo, useState } from 'react';
import { FillButton } from '@/ui/Buttons/FillButton';
import {
  Advantages,
  Buttons,
  Card,
  Heading,
  Info,
  List,
  Price,
  TimeType,
} from './styled';
import { PricingCardProps } from './types';
import { MONTH, YEAR } from '@/constants/general';
import { timeTypes } from '@/constants/pricingTimeType';
import { theme } from '@/theme/theme';
import { PricingPopup } from '../PricingPopup';

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

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

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
              key={el}
            >
              {el}
            </TimeType>
          ))}
        </Buttons>
      </Info>
      <FillButton text="Choose plan" onClick={handlePopup} />
      <List>
        {options.map((el) => (
          <Advantages key={el}>{el}</Advantages>
        ))}
      </List>
      {showPopup && (
        <PricingPopup
          handleCardClick={handleCardClick}
          handlePopup={handlePopup}
          money={money}
          options={options}
          type={type}
        />
      )}
    </Card>
  );
};
