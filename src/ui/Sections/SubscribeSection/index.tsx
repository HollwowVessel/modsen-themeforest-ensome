import { ChangeEvent, useState } from 'react';

import {
  Container,
  Description,
  Info,
  Interaction,
  Section,
  Subscribe,
} from './styled';
import { subscribeToNewsLetter } from '@/api/emailjsApi';
import { validateEmail } from '@/utils/validateEmail';
import { InputWithButton } from '@/ui/Inputs/InputWithButton';

export const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const check = validateEmail(email);
    setIncorrectEmail(check);

    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    setEmail('');
    subscribeToNewsLetter(email, setError);
    setIncorrectEmail(true);
  };

  return (
    <Container>
      <Section>
        <Info>
          <Subscribe>Subscribe to our newsletter</Subscribe>

          <InputWithButton
            buttonText="Send"
            onChange={handleChange}
            onClick={handleSubscribe}
            placeholder="Your email"
            value={email}
            error={incorrectEmail}
            disabled={incorrectEmail}
          />
          {error}

          <Description>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </Description>
        </Info>
        <Interaction>
          <InputWithButton
            buttonText="Send"
            onChange={handleChange}
            onClick={handleSubscribe}
            placeholder="Your email"
            value={email}
            error={incorrectEmail}
            disabled={incorrectEmail}
          />
        </Interaction>
        {error}
      </Section>
    </Container>
  );
};
