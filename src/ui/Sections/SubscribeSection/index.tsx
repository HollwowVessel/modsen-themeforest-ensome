import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { subscribeToNewsLetter } from '@/api/emailjsApi';
import { InputWithButton } from '@/ui/Inputs/InputWithButton';
import { validateEmail } from '@/utils/validateEmail';

import {
  Container,
  Description,
  Info,
  Interaction,
  Section,
  Subscribe,
} from './styled';

export const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [error, setError] = useState('');
  const { t } = useTranslation();
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
          <Subscribe>{t('Subscribe to')}</Subscribe>

          <InputWithButton
            buttonText={t('Send') as string}
            onChange={handleChange}
            onClick={handleSubscribe}
            placeholder={t('Your email') as string}
            value={email}
            error={incorrectEmail}
            disabled={incorrectEmail}
          />
          {error}

          <Description>{t('Sed ut')}</Description>
        </Info>
        <Interaction>
          <InputWithButton
            buttonText={t('Send') as string}
            onChange={handleChange}
            onClick={handleSubscribe}
            placeholder={t('Your email') as string}
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
