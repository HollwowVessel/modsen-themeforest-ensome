import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { OverviewSectionFour } from 'tired-hollow-lib-modsen';

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

export const Overview = memo(() => {
  const { t } = useTranslation();
  return (
    <Container>
      <Heading>{t('We provide')}</Heading>
      <Info>
        <OverviewSectionFour />
        <InfoDescription>{t('Doloremque laudantium')}</InfoDescription>
      </Info>
      <Companies>
        {logo.map((el) => (
          <CompaniesItem key={el}>
            <CompaniesImage src={el} alt="company" title="company" />
          </CompaniesItem>
        ))}
      </Companies>
    </Container>
  );
});
