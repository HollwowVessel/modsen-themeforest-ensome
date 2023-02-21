import { useTranslation } from 'react-i18next';
import {
  DescriptionSection,
  HelpSection,
  SubscribeSection,
} from 'tired-hollow-lib-modsen';

import { Overview } from '@/components/Overview';
import { servicesItems } from '@/constants/servicesCard';
import { Layout } from '@/containers/Layout';
import { SpecialContainer } from '@/containers/SpecialContainer';

export const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <DescriptionSection
        description={t('Sed ut')}
        heading={t('Data Analytics')}
        name={t('Services')}
        link="services"
      />
      <SpecialContainer cards={servicesItems} link="/services/" />
      <Overview />
      <HelpSection />
      <SubscribeSection />
    </Layout>
  );
};
