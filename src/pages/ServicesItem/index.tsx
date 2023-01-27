import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';

import { HelpSection } from '@/ui/Sections/HelpSection';
import { FooterSection } from '@/ui/FooterSection';

import { ItemContainer } from '@/containers/ItemContainer';
import { SpecialCard } from '@/ui/Cards/SpecialCard';
import { servicesItems } from '@/constants/servicesCard';
import { DescriptionSection } from '@/ui/Sections/DescriptionSection';

export const ServicesItemPage = () => {
  const { index } = useParams();

  return (
    <>
      <Navigation />
      <DescriptionSection
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo
      inventore."
        heading="Data Analytics Services"
        name="Services"
        link="services"
      />
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
