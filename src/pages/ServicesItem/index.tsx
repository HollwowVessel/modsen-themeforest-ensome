import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';
import { SolutionsDescription } from '@/components/SolutionsDescription';

import { HelpSection } from '@/ui/Sections/HelpSection';
import { FooterSection } from '@/ui/FooterSection';

import { ItemContainer } from '@/containers/ItemContainer';
import { SpecialCard } from '@/ui/Cards/SpecialCard';
import { servicesItems } from '@/constants/servicesCard';

export const ServicesItemPage = () => {
  const { index } = useParams();

  return (
    <>
      <Navigation />
      <SolutionsDescription />
      <ItemContainer
        RenderCard={SpecialCard}
        index={index as string}
        unfilteredItems={servicesItems}
      />
      <HelpSection />
      <FooterSection />
    </>
  );
};
