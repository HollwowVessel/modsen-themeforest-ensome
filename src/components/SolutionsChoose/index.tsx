import { memo } from 'react';
import Servers from '@/assets/images/solutions.jpg';
import {
  Container,
  Heading,
  Image,
  Info,
  Item,
  ItemDescription,
  ItemName,
  List,
} from './styled';
import { solutionsAdvantages } from '@/constants/solutionsAdvantages';

export const SolutionsChoose = memo(() => (
  <Container>
    <Image src={Servers} loading="lazy" />
    <Info>
      <Heading>Why choose us?</Heading>
      <List>
        {solutionsAdvantages.map(({ heading, description }, id) => (
          <Item key={id}>
            <ItemName>{heading}</ItemName>
            <ItemDescription>{description}</ItemDescription>
          </Item>
        ))}
      </List>
    </Info>
  </Container>
));
