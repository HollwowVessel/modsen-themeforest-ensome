import React, { memo } from 'react';
import { Container, Heading, Home, Links, Name } from './styled';

export const BlogDescription = memo(({ text }: { text: string }) => (
  <Container>
    <Heading>{text}</Heading>
    <Links>
      <Home to="/">Home</Home>
      <Name to="">{text.split(' ').slice(0, 4).join(' ')}</Name>
    </Links>
  </Container>
));
