import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { SubscribeSectionBlue } from '@/ui/Sections/SubscribeSectionBlue';
import { BlogDescription } from '@/components/BlogDescription';
import { BlogArticle } from '@/components/BlogArticle';
import { Sidebar } from '@/components/Sidebar';
import { Container } from './styled';
import { Related } from '@/components/Related';
import { FooterSection } from '@/ui/FooterSection';
import { blogArticles } from '@/constants/blogArticle';

export const BlogPage = () => {
  const { index } = useParams();
  const { heading, text, image, date } =
    blogArticles[typeof index === 'string' ? +index : 0];
  return (
    <>
      <Navigation />
      <BlogDescription text={heading} />
      <Container>
        <BlogArticle text={text} heading={heading} image={image} date={date} />
        <Sidebar />
      </Container>
      <Related />
      <SubscribeSectionBlue />
      <SubscribeSection />
      <FooterSection />
    </>
  );
};
