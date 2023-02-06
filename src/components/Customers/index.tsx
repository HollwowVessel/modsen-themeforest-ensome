import { memo } from 'react';
import { logo } from '@/constants/logo';

import {
  Companies,
  CompaniesImage,
  CompaniesItem,
  Container,
  Heading,
  Info,
  InfoDescription,
} from './styled';

export const Customers = memo(() => (
  <Container>
    <Heading>Our customers</Heading>
    <Info>
      <InfoDescription>
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo
        inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
      </InfoDescription>
    </Info>
    <Companies>
      {logo.map((el) => (
        <CompaniesItem key={el}>
          <CompaniesImage src={el} />
        </CompaniesItem>
      ))}
    </Companies>
  </Container>
));
