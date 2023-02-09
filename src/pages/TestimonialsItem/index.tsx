import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

import { BlogArticle } from '@/components/BlogArticle';
import { Container } from './styled';

import { FooterSection } from '@/ui/FooterSection';

import { cardItems } from '@/constants/testimonialCards';
import { SecondDescriptionSection } from '@/ui/Sections/SecondDescriptionSection';

export const TestimonialsItemPage = () => {
  const { index } = useParams();
  const { text, icon, heading, info } = cardItems[+(index as string)];
  return (
    <>
      <Navigation />
      <SecondDescriptionSection
        heading={heading}
        link={`testimonials/${index}`}
        name={heading}
      />
      <Container>
        <BlogArticle text={info} heading={text} image={icon} date={heading} />
      </Container>
      <SubscribeSection />
      <FooterSection />
    </>
  );
};
