import React from 'react';
import { FillButton } from '@/ui/Buttons/FillButton';
import { Container, Description, Heading } from './styled';

export const HelpSection = () => (
  <Container>
    <Heading>Do you need help?</Heading>
    <Description>
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid ex ea commodi.
    </Description>
    <FillButton text="Contact Us" />
  </Container>
);
