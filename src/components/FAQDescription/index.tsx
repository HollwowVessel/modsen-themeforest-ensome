import React from 'react';
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

export const FAQDescription = () => (
  <Container>
    <Links>
      <Home to="/">Home</Home>
      <Solutions to="/">FAQS</Solutions>
    </Links>
    <Info>
      <Name>FAQs</Name>
      <Heading>Frequently asked questions</Heading>
      <Description>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium totam.
      </Description>
    </Info>
  </Container>
);
