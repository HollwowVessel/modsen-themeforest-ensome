import { useTranslation } from 'react-i18next';
import {
  DescriptionSection,
  HelpSection,
  SubscribeSection,
} from 'tired-hollow-lib-modsen';

import { FAQ } from '@/components/FAQ';
import { Layout } from '@/containers/Layout';

export const FAQPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <DescriptionSection
        description={t('Accusantium doloremque')}
        heading={t('Frequently asked')}
        name="FAQS"
        link="FAQ"
      />
      <FAQ />
      <HelpSection />
      <SubscribeSection />
    </Layout>
  );
};
