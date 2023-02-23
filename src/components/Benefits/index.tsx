import { memo } from 'react';

import { BenefitsCard } from '@/components/BenefitsCard';
import { benefitsCard } from '@/constants/benefitsCard';
import { useLanguage } from '@/hooks/useLanguage';

import { Cards, Container, Description, Heading, Info } from './styled';
import { BenefitsProps } from './types';

export const Benefits = memo(
  ({ heading, description, background }: BenefitsProps) => {
    const lang = useLanguage();

    return (
      <Container background={background}>
        <Info>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </Info>
        <Cards>
          {benefitsCard[lang].map(({ icon, heading, description }) => (
            <BenefitsCard
              icon={icon}
              heading={heading}
              description={description}
              key={icon}
            />
          ))}
        </Cards>
      </Container>
    );
  }
);
