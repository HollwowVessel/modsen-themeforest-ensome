import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';
import { SolutionsDescription } from '@/components/SolutionsDescription';

import { SolutionsCard } from '@/components/SolutionsCard';
import { Card, Cards, Description, Heading, Image } from './styled';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { FooterSection } from '@/ui/FooterSection';
import { servicesItems } from '@/constants/servicesCard';

export const ServicesItemPage = () => {
  const { index } = useParams();
  const { img, description, heading } = useMemo(
    () => servicesItems[+(index as string)],
    [index]
  );
  const items = useMemo(
    () => servicesItems.filter(({ id }) => id !== +(index as string)),
    [index]
  );

  return (
    <>
      <Navigation />
      <SolutionsDescription />
      <Card>
        <Heading>{heading}</Heading>
        <Image src={img} alt={img} />
        <Description>{description}</Description>
      </Card>
      <Cards>
        {items.map(({ img, heading, description, id }) => (
          <SolutionsCard
            description={description}
            heading={heading}
            img={img}
            link={`/services/${id}`}
          />
        ))}
      </Cards>
      <HelpSection />
      <FooterSection />
    </>
  );
};
