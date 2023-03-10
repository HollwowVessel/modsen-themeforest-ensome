import { useParams } from 'react-router-dom';
import {
  SecondDescriptionSection,
  SubscribeSection,
} from 'tired-hollow-lib-modsen';

import { BlogArticle } from '@/components/BlogArticle';
import { testimonialCards } from '@/constants/testimonialCards';
import { Layout } from '@/containers/Layout';
import { useLanguage } from '@/hooks/useLanguage';

import { Container } from './styled';

export const TestimonialsItemPage = () => {
  const { index } = useParams();

  const lang = useLanguage();

  const { text, icon, heading, info } = testimonialCards[lang].filter(
    ({ heading }) => heading.indexOf(index as string) !== -1
  )[0];
  return (
    <Layout>
      <SecondDescriptionSection heading={heading} />
      <Container>
        <BlogArticle text={info} heading={text} image={icon} date={heading} />
      </Container>
      <SubscribeSection />
    </Layout>
  );
};
