import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  DescriptionSection,
  HelpSection,
  OverviewSectionFour,
  SubscribeSection,
  TestimonialsCard,
} from 'tired-hollow-lib-modsen';

import AboutMobile from '@/assets/images/aboutMobile.png';
import { Benefits } from '@/components/Benefits';
import { testimonialCards } from '@/constants/testimonialCards';
import { Language } from '@/utils/languageContext';

import { Layout } from '../Layout';
import {
  AboutMobileSection,
  Description,
  Heading,
  Image,
  Overview,
} from './styled';

export const AboutMobileContainer = () => {
  const { t } = useTranslation();

  const { lang } = useContext(Language);

  return (
    <AboutMobileSection>
      <Layout>
        <DescriptionSection
          description=""
          heading=""
          link="/about"
          name={t('About us')}
        />
        <Heading>{t('We work')}</Heading>
        <Description>{t('Sed ut')}</Description>
        <Image src={AboutMobile} alt="about" title="about" />
        <Overview>
          <Heading>{t('We provide')}</Heading>
          <OverviewSectionFour />
          <Description>{t('Sed ut')}</Description>
        </Overview>
        <Benefits
          description={t('Doloremque laudantium')}
          heading={t('Why our')}
        />
        <Carousel
          Card={TestimonialsCard}
          cards={testimonialCards[lang]}
          heading={t('Testimonials')}
          type="close"
        />
        <HelpSection />
        <SubscribeSection />
      </Layout>
    </AboutMobileSection>
  );
};
