import { useParams } from 'react-router-dom';
import {
  HelpSection,
  SecondDescriptionSection,
  SubscribeSection,
} from 'tired-hollow-lib-modsen';

import { SolutionsItemDescription } from '@/components/SolutionsItemDescription';
import { solutionsItems } from '@/constants/solutions';
import { Layout } from '@/containers/Layout';
import { useLanguage } from '@/hooks/useLanguage';

export const SolutionsItemPage = () => {
  const { index } = useParams();
  const lang = useLanguage();
  const { heading } = solutionsItems[lang].filter(
    ({ heading }) => heading.indexOf(index as string) !== -1
  )[0];
  return (
    <Layout>
      <SecondDescriptionSection heading={heading} />
      <SolutionsItemDescription name={heading} />
      <HelpSection />
      <SubscribeSection />
    </Layout>
  );
};
