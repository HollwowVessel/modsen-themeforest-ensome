import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';

import { solutionsItems } from '@/constants/solutions';

import { HelpSection } from '@/ui/Sections/HelpSection';
import { FooterSection } from '@/ui/FooterSection';
import { SecondDescriptionSection } from '@/ui/Sections/SecondDescriptionSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { SolutionsItemDescription } from '@/components/SolutionsItemDescription';

export const SolutionsItemPage = () => {
  const { index } = useParams();
  const { heading } = solutionsItems[+(index as string)];
  return (
    <>
      <Navigation />
      <SecondDescriptionSection
        heading={heading}
        link={`/solutions/${index}`}
        name={heading}
      />
      <SolutionsItemDescription name={heading} />
      <HelpSection />
      <SubscribeSection />
      <FooterSection />
    </>
  );
};
