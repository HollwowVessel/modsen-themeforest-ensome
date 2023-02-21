import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { FillButtonLink } from '@/ui/Links/FillButtonLink';

import { Container, Description, Heading } from './styled';

export const HelpSection = memo(() => {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>{t('Do you')}</Heading>
      <Description>{t('Ut enim')}</Description>
      <FillButtonLink text={t('Contact us')} to="/contacts" />
    </Container>
  );
});
