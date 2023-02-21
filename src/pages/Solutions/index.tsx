import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  DescriptionSection,
  HelpSection,
  TestimonialsCard,
} from 'tired-hollow-lib-modsen';

import Servers from '@/assets/images/solutions.jpg';
import { solutionsItems } from '@/constants/solutions';
import { solutionsAdvantages } from '@/constants/solutionsAdvantages';
import { testimonialCards } from '@/constants/testimonialCards';
import { Layout } from '@/containers/Layout';
import { SpecialContainer } from '@/containers/SpecialContainer';
import { Language } from '@/utils/languageContext';

import {
  Container,
  Heading,
  Image,
  Info,
  Item,
  ItemDescription,
  ItemName,
  List,
} from './styled';

export const SolutionsPage = () => {
  const { t } = useTranslation();

  const { lang } = useContext(Language);

  return (
    <Layout>
      <DescriptionSection
        description={t('Getting ready')}
        heading={t('Data analytics sol')}
        link="solutions"
        name={t('Solutions')}
      />
      <SpecialContainer cards={solutionsItems} link="/solutions/" />
      <Container>
        <Image src={Servers} alt="servers" title="servers" />
        <Info>
          <Heading>{t('Why choose')}</Heading>
          <List>
            {solutionsAdvantages[lang].map(({ heading, description }) => (
              <Item key={heading}>
                <ItemName>{heading}</ItemName>
                <ItemDescription>{description}</ItemDescription>
              </Item>
            ))}
          </List>
        </Info>
      </Container>
      <Carousel
        Card={TestimonialsCard}
        cards={testimonialCards[lang]}
        heading={t('Testimonials')}
        type="close"
      />
      <HelpSection />
    </Layout>
  );
};
