import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';

import { solutionsItems } from '@/constants/solutions';
import { SpecialCard } from '@/ui/Cards/SpecialCard';

import { HelpSection } from '@/ui/Sections/HelpSection';
import { FooterSection } from '@/ui/FooterSection';
import { ItemContainer } from '@/containers/ItemContainer';
import { DescriptionSection } from '@/ui/Sections/DescriptionSection';

export const SolutionsItemPage = () => {
  const { index } = useParams();

  return (
    <>
      <Navigation />
      <DescriptionSection
        description="Getting ready for your success, we provide truly outstanding IT
        solutions."
        heading="Data analytics solutions"
        link="solutions"
        name="Solutions"
      />
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
