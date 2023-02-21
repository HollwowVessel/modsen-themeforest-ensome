import { useTranslation } from 'react-i18next';
import {
  SecondDescriptionSection,
  SubscribeSection,
} from 'tired-hollow-lib-modsen';

import { BlogContainer } from '@/containers/BlogContainer';
import { Layout } from '@/containers/Layout';

export const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SecondDescriptionSection heading={t('Blog Page')} />
      <BlogContainer />
      <SubscribeSection />
    </Layout>
  );
};
