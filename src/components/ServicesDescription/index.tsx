import { memo } from 'react';
import {
  Container,
  Description,
  Heading,
  Home,
  Info,
  Links,
  Name,
  Services,
} from './styled';

export const ServicesDescription = memo(() => (
  <Container>
    <Links>
      <Home to="/">Home</Home>
      <Services to="/">Services</Services>
    </Links>
    <Info>
      <Name>Services</Name>
      <Heading>Data Analytics Services</Heading>
      <Description>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab
        illo inventore.
      </Description>
    </Info>
  </Container>
));
