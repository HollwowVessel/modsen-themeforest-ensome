import React from 'react';
import {
  Container,
  Description,
  Email,
  Info,
  Interaction,
  Send,
  Subscribe,
} from './styled';

export const SubscribeSection = () => (
  <Container>
    <Info>
      <Subscribe>Subscribe to our newsletter</Subscribe>
      <Description>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </Description>
    </Info>
    <Interaction>
      <Email placeholder="Your email" />
      <Send>Send</Send>
    </Interaction>
  </Container>
);
