import { useTranslation } from 'react-i18next';
import { OverviewSectionOne } from 'tired-hollow-lib-modsen';

import { Container, Heading } from './styled';

export const AboutContainer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>{t('Ensome in')}</Heading>
      <OverviewSectionOne />
    </Container>
  );
};
