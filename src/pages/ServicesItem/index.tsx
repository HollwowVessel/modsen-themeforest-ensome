import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';

import { FooterSection } from '@/ui/FooterSection';

import { servicesItems } from '@/constants/servicesCard';
import { ThirdDescriptionSection } from '@/ui/Sections/ThirdDescriptionSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { ContactInformation } from '@/components/ContactInformation';
import { ServicesItemContainer } from '@/containers/ServicesItemContainer';

export const ServicesItemPage = () => {
  const { index } = useParams();

  return (
    <>
      <Navigation />
      <ThirdDescriptionSection
        heading={servicesItems[+(index as string)].heading}
        link={`/services/${index}`}
        text="Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa."
      />
      <ServicesItemContainer />
      <ContactInformation
        heading="Contact Information"
        description="Fill up the form and our Team will get back to you with 25 hours."
      />
      <SubscribeSection />
      <FooterSection />
    </>
  );
};
