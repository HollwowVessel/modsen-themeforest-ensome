import { Language } from 'interfaces/languageType';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  ContactsSection,
  SecondDescriptionSection,
  SubscribeSection,
  TestimonialsCard,
  TestimonialsCardOpen,
} from 'tired-hollow-lib-modsen';

import Mission from '@/assets/images/mission.jpg';
import Who from '@/assets/images/who.jpg';
import { AboutContent } from '@/components/AboutContent';
import { logo } from '@/constants/logo';
import { testimonialCards } from '@/constants/testimonialCards';
import { useLanguage } from '@/hooks/useLanguage';

import { AboutContainer } from '../AboutContainer';
import { Layout } from '../Layout';
import {
  AboutDesktopSection,
  Companies,
  CompaniesImage,
  CompaniesItem,
  Container,
  ContainerCustomers,
  Heading,
  Info,
  InfoDescription,
} from './styled';

export const AboutDesktopContainer = () => {
  const { t } = useTranslation();
  const lang = useLanguage();

  return (
    <AboutDesktopSection>
      <Layout>
        <SecondDescriptionSection heading={t('About us')} />
        <Container>
          <AboutContent
            headingText={t('Who we')}
            textPartOne={t('Sed ut')}
            img={Who}
            textPartTwo={t('Donec tincidunt')}
            reverse={false}
          />
          <AboutContent
            headingText={t('Our mission')}
            textPartOne={t('Sed ut')}
            img={Mission}
            textPartTwo={t('Quisque finibus consequat')}
            reverse
          />
        </Container>
        <AboutContainer />
        <ContainerCustomers>
          <Heading>{t('Our customers')}</Heading>
          <Info>
            <InfoDescription>{t('Totam rem')}</InfoDescription>
          </Info>
          <Companies>
            {logo.map((el) => (
              <CompaniesItem key={el}>
                <CompaniesImage alt="social" title="element" src={el} />
              </CompaniesItem>
            ))}
          </Companies>
        </ContainerCustomers>
        <Carousel
          heading={t('What our')}
          Card={TestimonialsCardOpen as typeof TestimonialsCard}
          cards={testimonialCards[lang]}
          type="open"
        />
        <ContactsSection />
        <SubscribeSection />
      </Layout>
    </AboutDesktopSection>
  );
};
