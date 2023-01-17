import { FillButton } from 'ui/Buttons/FillButton';
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

interface PricingCardProps {
  type: string;
  price: string;
  options: string[];
}

export const PricingCard = ({ type, price, options }: PricingCardProps) => (
  <Card>
    <Heading>{type}</Heading>
    <Info>
      <Price>${price}</Price>
      <Buttons>
        <TimeType>Mo</TimeType>
        <TimeType>Yr</TimeType>
      </Buttons>
    </Info>
    <FillButton text="Choose plan" />
    <List>
      {options.map((el, id) => (
        <Advantages key={id}>{el}</Advantages>
      ))}
    </List>
  </Card>
);
