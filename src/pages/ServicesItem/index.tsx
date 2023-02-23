import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  SubscribeSection,
  ThirdDescriptionSection,
} from 'tired-hollow-lib-modsen';

import { ContactInformation } from '@/components/ContactInformation';
import { servicesItems } from '@/constants/servicesCard';
import { Layout } from '@/containers/Layout';
import { ServicesItemContainer } from '@/containers/ServicesItemContainer';
import { useLanguage } from '@/hooks/useLanguage';

export const ServicesItemPage = () => {
  const { t } = useTranslation();
  const lang = useLanguage();
  const { index } = useParams();
  const { heading } = servicesItems[lang].filter(
    ({ heading }) => heading.indexOf(index as string) !== -1
  )[0];
  return (
    <Layout>
      <ThirdDescriptionSection heading={heading} text={t('Sed ut')} />
      <ServicesItemContainer />
      <ContactInformation
        heading={t('Contact Information')}
        description={t('Fill up')}
      />
      <SubscribeSection />
    </Layout>
  );
};
