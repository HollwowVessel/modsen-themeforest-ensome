import React from 'react';
import { logo } from '@/constants/logo';
import { OverviewSectionFour } from '@/ui/Sections/Overview/OverviewSectionFour';

import {
  Companies,
  CompaniesImage,
  CompaniesItem,
  Container,
  Heading,
  Info,
  InfoDescription,
} from './styled';

export const Overview = () => (
  <Container>
    <Heading>We provide services that guarantee your success</Heading>
    <Info>
      <OverviewSectionFour />
      <InfoDescription>
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo
        inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
      </InfoDescription>
    </Info>
    <Companies>
      {logo.map((el, id) => (
        <CompaniesItem key={id}>
          <CompaniesImage src={el} />
        </CompaniesItem>
      ))}
    </Companies>
  </Container>
);
