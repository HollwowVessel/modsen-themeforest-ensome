import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';
import { SolutionsDescription } from '@/components/SolutionsDescription';
import { solutionsItems } from '@/constants/solutions';
import { SpecialCard } from '@/ui/Cards/SpecialCard';

import { HelpSection } from '@/ui/Sections/HelpSection';
import { FooterSection } from '@/ui/FooterSection';
import { ItemContainer } from '@/containers/ItemContainer';

export const SolutionsItemPage = () => {
  const { index } = useParams();

  return (
    <>
      <Navigation />
      <SolutionsDescription />
      <ItemContainer
        RenderCard={SpecialCard}
        index={index as string}
        unfilteredItems={solutionsItems}
      />
      <HelpSection />
      <FooterSection />
    </>
  );
};

// TODO remove
