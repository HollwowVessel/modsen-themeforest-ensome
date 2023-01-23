import React from 'react';
import { EmailInput } from '@/ui/Inputs/EmailInput';
import {
  Container,
  Description,
  Email,
  Info,
  Interaction,
  Send,
  Subscribe,
} from './styled';
import { FillButton } from '@/ui/Buttons/FillButton';

export const SubscribeSectionBlue = () => (
  <Container>
    <Info>
      <Subscribe>Subscribe to our newsletter</Subscribe>
      <Interaction>
        <EmailInput placeholder="Your email" />
        <FillButton text="Subscribe" />
      </Interaction>

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
