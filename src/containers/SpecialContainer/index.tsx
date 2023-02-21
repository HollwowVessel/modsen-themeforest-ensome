import { memo, useContext } from 'react';
import { SpecialCard } from 'tired-hollow-lib-modsen';

import { Language } from '@/utils/languageContext';

import { Cards, Container } from './styled';
import { SpecialContainerProps } from './types';

export const SpecialContainer = memo(({ cards }: SpecialContainerProps) => {
  const { lang } = useContext(Language);

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
