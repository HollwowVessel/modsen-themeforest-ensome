import { memo, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { PricingCard } from '@/components/PricingCard';
import { pricingCards } from '@/constants/pricingCards';
import { Language } from '@/utils/languageContext';

import { Cards, Container, Heading } from './styled';

export const Pricing = memo(() => {
  const { t } = useTranslation();

  const { lang } = useContext(Language);

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
