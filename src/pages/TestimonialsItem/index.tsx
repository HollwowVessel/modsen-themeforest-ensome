import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

import { BlogDescription } from '@/components/BlogDescription';
import { BlogArticle } from '@/components/BlogArticle';
import { Sidebar } from '@/components/Sidebar';
import { Container } from './styled';
import { Related } from '@/components/Related';
import { FooterSection } from '@/ui/FooterSection';
import { blogArticles } from '@/constants/blogArticle';
import { cardItems } from '@/constants/testimonialCards';

export const TestimonialsItemPage = () => {
  const { index } = useParams();
  const { text, icon, heading, info } = cardItems[+(index as string)];
  return (
    <>
      <Navigation />
      <BlogDescription text={heading} />
      <Container>
        <BlogArticle text={info} heading={text} image={icon} date={heading} />
        <Sidebar />
      </Container>
      <SubscribeSection />
      <FooterSection />
    </>
  );
};

// TODO remove
