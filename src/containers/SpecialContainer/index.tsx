import { memo } from 'react';
import { SpecialCard } from 'tired-hollow-lib-modsen';

import { useLanguage } from '@/hooks/useLanguage';

import { Cards, Container } from './styled';
import { SpecialContainerProps } from './types';

export const SpecialContainer = memo(({ cards }: SpecialContainerProps) => {
  const lang = useLanguage();

  return (
    <Container>
      <Cards>
        {cards[lang].map(({ img, heading, description }) => (
          <SpecialCard
            description={description}
            heading={heading}
            img={img}
            key={img}
            link={heading}
          />
        ))}
      </Cards>
    </Container>
  );
});
