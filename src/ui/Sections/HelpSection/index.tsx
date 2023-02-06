import { memo } from 'react';
import { Container, Description, Heading } from './styled';
import { FillButtonLink } from '@/ui/Links/FillButtonLink';

export const HelpSection = memo(() => (
  <Container>
    <Heading>Do you need help?</Heading>
    <Description>
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid ex ea commodi.
    </Description>
    <FillButtonLink text="Contact Us" to="/contacts" />
  </Container>
));
