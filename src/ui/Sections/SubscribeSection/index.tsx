import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useState,
} from 'react';
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
import { subscribeToNewsLetter } from '../../../api/emailjsApi';

export const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    setEmail('');
    subscribeToNewsLetter(email);
  };

  return (
    <Container>
      <Info>
        <Subscribe>Subscribe to our newsletter</Subscribe>
        <Interaction>
          <Email
            placeholder="Your email"
            onChange={handleChange}
            value={email}
          />
          <FillButton text="Subscribe" />
        </Interaction>

        <Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </Description>
      </Info>
      <Interaction>
        <Email placeholder="Your email" onChange={handleChange} value={email} />
        <Send onClick={handleSubscribe}>Subscribe</Send>
      </Interaction>
    </Container>
  );
};
