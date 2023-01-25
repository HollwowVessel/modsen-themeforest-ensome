import React, { memo } from 'react';
import {
  Container,
  Description,
  Heading,
  Home,
  Info,
  Links,
  Name,
  Solutions,
} from './styled';

export const SolutionsDescription = memo(() => (
  <Container>
    <Links>
      <Home to="/">Home</Home>
      <Solutions to="/solutions">Solutions</Solutions>
    </Links>
    <Info>
      <Name>Solutions</Name>
      <Heading>Data analytics solutions</Heading>
      <Description>
        Getting ready for your success, we provide truly outstanding IT
        solutions.
      </Description>
    </Info>
  </Container>
));
