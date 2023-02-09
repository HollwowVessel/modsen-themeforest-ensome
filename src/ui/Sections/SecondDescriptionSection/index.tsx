import { memo } from 'react';
import { AboutUs, BorderLink, Container, Heading, Links } from './styled';
import { SecondDescriptionSectionProps } from './types';

export const SecondDescriptionSection = memo(
  ({ link, heading, name, secondlink }: SecondDescriptionSectionProps) => (
    <Container>
      <Heading>{heading}</Heading>
      <Links>
        <BorderLink to="/">Home</BorderLink>
        {secondlink && <BorderLink to="/elements">Our team</BorderLink>}

        <AboutUs to={`/${link}`}>
          {name.split(' ').slice(0, 4).join(' ')}
        </AboutUs>
      </Links>
    </Container>
  )
);
