import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArrowLink } from '@/ui/Links/ArrowLink';

import { Container, Description, Heading, Image } from './styled';
import { SpecialCardProps } from './types';

export const SpecialCard = memo(
  ({ img, heading, description, link }: SpecialCardProps) => {
    const { t } = useTranslation();

    return (
      <Container>
        <Image src={img} alt={img} title="img" />
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        <ArrowLink text={t('Read more')} to={link} />
      </Container>
    );
  }
);
