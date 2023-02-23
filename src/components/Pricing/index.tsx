import { Language } from 'interfaces/languageType';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PricingCard } from '@/components/PricingCard';
import { pricingCards } from '@/constants/pricingCards';
import { useLanguage } from '@/hooks/useLanguage';

import { Cards, Container, Heading } from './styled';

export const Pricing = memo(() => {
  const { t } = useTranslation();

  const lang = useLanguage();

  return (
    <Container>
      <Heading>{t('Our pricing')}</Heading>
      <Cards>
        {pricingCards[lang].map(({ type, price, options }) => (
          <PricingCard price={price} options={options} type={type} key={type} />
        ))}
      </Cards>
    </Container>
  );
});
