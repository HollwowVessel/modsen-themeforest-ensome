import React from 'react';
import { AboutUs, Container, Heading, Home, Links } from './styled';

export const AboutDescription = () => (
  <Container>
    <Heading>About Us</Heading>
    <Links>
      <Home to="/">Home</Home>
      <AboutUs to="/">About Us</AboutUs>
    </Links>
  </Container>
);
