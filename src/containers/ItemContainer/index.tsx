import { useContext, useMemo } from 'react';

import { Language } from '@/utils/languageContext';

import { Card, Cards, Description, Heading, Image } from './styled';
import { ItemContainerProps } from './types';

export const ItemContainer = ({
  index,
  unfilteredItems,
  RenderCard,
}: ItemContainerProps) => {
  const { lang } = useContext(Language);

  const { img, description, heading } = useMemo(
    () => unfilteredItems[lang][+(index as string)],
    [index]
  );

  const items = useMemo(
    () => unfilteredItems[lang].filter(({ id }) => id !== +(index as string)),
    [index]
  );

  return (
    <>
      <Card>
        <Heading>{heading}</Heading>
        <Image src={img} alt={img} title="img" />
        <Description>{description}</Description>
      </Card>
      <Cards>
        {items.map(({ img, heading, description }) => (
          <RenderCard
            description={description}
            heading={heading}
            img={img}
            link={`/services/${heading}`}
            key={img}
          />
        ))}
      </Cards>
    </>
  );
};
