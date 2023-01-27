import { ChangeEvent, useState } from 'react';

import {
  Container,
  Description,
  Email,
  Info,
  Interaction,
  Section,
  Send,
  Subscribe,
} from './styled';
import { FillButton } from '@/ui/Buttons/FillButton';
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
          <Interaction>
            <Email
              placeholder="Your email"
              onChange={handleChange}
              value={email}
            />
            <FillButton text="Subscribe" disabled={incorrectEmail} />
          </Interaction>

          <Description>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </Description>
        </Info>
        <InputWithButton
          buttonText="Send"
          onChange={handleChange}
          onClick={handleSubscribe}
          placeholder="Your email"
          value={email}
          error={incorrectEmail}
          disabled={incorrectEmail}
        />
      </Section>
    </Container>
  );
};
