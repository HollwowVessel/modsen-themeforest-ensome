import React from 'react';
import { OverviewSectionFour } from '@/ui/Sections/Overview/OverviewSectionFour';
import { Description, Heading, Overview } from './styled';

export const AboutOverview = () => (
  <Overview>
    <Heading>We provide services that guarantee your success</Heading>
    <OverviewSectionFour />
    <Description>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae.
    </Description>
  </Overview>
);
