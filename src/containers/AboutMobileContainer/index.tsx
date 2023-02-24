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
import { useLanguage } from '@/hooks/useLanguage';
import { testimonialsRender } from '@/utils/carouselHelper';

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

  const lang = useLanguage();

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
          renderer={testimonialsRender}
          cards={testimonialCards[lang]}
          heading={t('Testimonials')}
          type="hidden"
        />
        <HelpSection />
        <SubscribeSection />
      </Layout>
    </AboutMobileSection>
  );
};
