import { useMemo } from 'react';

import { Card, Cards, Description, Heading, Image } from './styled';
import { ItemContainerProps } from './types';

export const ItemContainer = ({
  index,
  unfilteredItems,
  RenderCard,
}: ItemContainerProps) => {
  const { img, description, heading } = useMemo(
    () => unfilteredItems[+(index as string)],
    [index]
  );
  const items = useMemo(
    () => unfilteredItems.filter(({ id }) => id !== +(index as string)),
    [index]
  );

  return (
    <>
      <Card>
        <Heading>{heading}</Heading>
        <Image src={img} alt={img} loading="lazy" />
        <Description>{description}</Description>
      </Card>
      <Cards>
        {items.map(({ img, heading, description, id }) => (
          <RenderCard
            description={description}
            heading={heading}
            img={img}
            link={`/services/${id}`}
            key={img}
          />
        ))}
      </Cards>
    </>
  );
};
