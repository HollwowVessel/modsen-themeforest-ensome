import { memo } from 'react';
import { AboutUs, Container, Heading, Home, Links } from './styled';
import { SecondDescriptionSectionProps } from './types';

export const SecondDescriptionSection = memo(
  ({ link, heading, name }: SecondDescriptionSectionProps) => (
    <Container>
      <Heading>{heading}</Heading>
      <Links>
        <Home to="/">Home</Home>
        <AboutUs to={`/${link}`}>
          {name.split(' ').slice(0, 4).join(' ')}
        </AboutUs>
      </Links>
    </Container>
  )
);
