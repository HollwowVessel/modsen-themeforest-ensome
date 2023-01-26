import { useState } from 'react';

import { Navigation } from '@/ui/Navigation';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

import { BlogDescription } from '@/components/BlogDescription';
import { FooterSection } from '@/ui/FooterSection';
import { BlogContainer } from '@/containers/BlogContainer';

export const BlogPage = () => (
  <>
    <Navigation />
    <BlogDescription text="Blog page" />
    <BlogContainer />
    <SubscribeSection />
    <FooterSection />
  </>
);
