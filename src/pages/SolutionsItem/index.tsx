import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';
import { SolutionsDescription } from '@/components/SolutionsDescription';
import { solutionsItems } from '@/constants/solutions';
import { SolutionsCard } from '@/components/SolutionsCard';
import { Card, Cards, Description, Heading, Image } from './styled';
import { HelpSection } from '@/ui/Sections/HelpSection';
import { FooterSection } from '@/ui/FooterSection';

export const SolutionsItemPage = () => {
  const { index } = useParams();
  const { img, description, heading } = useMemo(
    () => solutionsItems[+(index as string)],
    [index]
  );
  const items = useMemo(
    () => solutionsItems.filter(({ id }) => id !== +(index as string)),
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
            link={`/solutions/${id}`}
            key={id}
          />
        ))}
      </Cards>
      <HelpSection />
      <FooterSection />
    </>
  );
};
