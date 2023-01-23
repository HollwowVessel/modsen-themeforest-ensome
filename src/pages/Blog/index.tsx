import React from 'react';
import { Navigation } from '@/ui/Navigation';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { SubscribeSectionBlue } from '@/ui/Sections/SubscribeSectionBlue';
import { BlogDescription } from '@/components/BlogDescription';
import { BlogArticle } from '@/components/BlogArticle';
import { Sidebar } from '@/components/Sidebar';
import { Container } from './styled';
import { Related } from '@/components/Related';
import { FooterSection } from '@/ui/FooterSection';

export const BlogPage = () => (
  <>
    <Navigation />
    <BlogDescription text="2022 software development trends explained with benefits" />
    <Container>
      <BlogArticle />
      <Sidebar />
    </Container>
    <Related />
    <SubscribeSectionBlue />
    <SubscribeSection />
    <FooterSection />
  </>
);
