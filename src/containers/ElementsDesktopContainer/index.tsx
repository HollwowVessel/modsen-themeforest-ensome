import React from 'react';
import { Navigation } from '@/ui/Navigation';

import { Team } from '@/components/Team';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { FooterSection } from '@/ui/FooterSection';
import { Container } from './styled';
import { ThirdDescriptionSection } from '@/ui/Sections/ThirdDescriptionSection';

export const ElementsDesktopContainer = () => (
  <Container>
    <Navigation />
    <ThirdDescriptionSection
      heading="Our team"
      link="/elements"
      text="Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu consectetur."
      text2="Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero."
    />
    <Team />
    <SubscribeSection />
    <FooterSection />
  </Container>
);
