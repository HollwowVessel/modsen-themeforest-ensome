import { useTranslation } from 'react-i18next';
import {
  SubscribeSection,
  ThirdDescriptionSection,
} from 'tired-hollow-lib-modsen';

import { Team } from '@/components/Team';

import { Layout } from '../Layout';
import { Container } from './styled';

export const ElementsDesktopContainer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Layout>
        <ThirdDescriptionSection
          heading={t('Our team')}
          text={t('Sed ut')}
          text2={t('Morbi urna')}
        />
        <Team />
        <SubscribeSection />
      </Layout>
    </Container>
  );
};
