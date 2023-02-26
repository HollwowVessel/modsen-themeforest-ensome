import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CircleButton,
  FillButtonLink,
  HelpSection,
  SubscribeSection,
} from 'tired-hollow-lib-modsen';

import features from '@/assets/images/features.png';
import hero from '@/assets/images/heroes.png';
import { Benefits } from '@/components/Benefits';
import { Overview } from '@/components/Overview';
import { Pricing } from '@/components/Pricing';
import { blogArticles } from '@/constants/blogArticle';
import { testimonialCards } from '@/constants/testimonialCards';
import { Layout } from '@/containers/Layout';
import { useLanguage } from '@/hooks/useLanguage';
import { blogRender, testimonialsRender } from '@/utils/carouselHelper';

import {
  ButtonContainer,
  Container,
  Description,
  Discover,
  Ensome,
  Heading,
  HeroesContainer,
  Image,
  Info,
  Newest,
  Solutions,
  SolutionsDescription,
  SolutionsHeading,
  SolutionsImage,
  SolutionsInfo,
} from './styled';

export const HomePage = () => {
  const { t } = useTranslation();
  const lang = useLanguage();
  return (
    <Layout>
      <Container>
        <Info>
          <Heading>
            {t('Find true')} <Ensome>{t('Ensome')}</Ensome>
          </Heading>
          <Description>{t('Lauda, totam')}</Description>
        </Info>
        <HeroesContainer>
          <ButtonContainer>
            <CircleButton text={t('Learn more')} to="/services" />
          </ButtonContainer>
          <Image src={hero} alt="hero" title="hero" />
        </HeroesContainer>
      </Container>
      <Container>
        <Info>
          <Heading>
            {t('The')} <Newest>{t('newest')}</Newest> {t('business analytics')}
          </Heading>
          <Discover>
            <Description>{t('Doloremque laudantium')}</Description>
            <FillButtonLink text={t('Discover more')} to="/solutions" />
          </Discover>
        </Info>
        <Solutions>
          <SolutionsImage src={features} alt="features" title="features" />
          <SolutionsInfo>
            <SolutionsImage
              src={features}
              width="715"
              height="220"
              alt="features"
              title="features"
            />
            <SolutionsHeading>{t('Radically new')}</SolutionsHeading>
            <SolutionsDescription>{t('Lauda, totam')}</SolutionsDescription>
            <FillButtonLink text={t('Learn more')} to="/solutions" />
          </SolutionsInfo>
        </Solutions>
      </Container>
      <Overview />
      <Benefits
        heading={t('The benefits')}
        description={t('Sed ut')}
        background
      />
      <Carousel
        renderer={testimonialsRender}
        cards={testimonialCards[lang]}
        heading={t('Testimonials')}
        type="hidden"
      />
      <Pricing />
      <Carousel
        renderer={blogRender}
        cards={blogArticles[lang]}
        heading={t('Our blog')}
        type="hidden"
      />
      <HelpSection />
      <SubscribeSection />
    </Layout>
  );
};
