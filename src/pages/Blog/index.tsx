import { useState } from 'react';

import { Navigation } from '@/ui/Navigation';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

import { FooterSection } from '@/ui/FooterSection';
import { BlogContainer } from '@/containers/BlogContainer';
import { SecondDescriptionSection } from '@/ui/Sections/SecondDescriptionSection';

export const BlogPage = () => (
  <>
    <Navigation />
    <SecondDescriptionSection heading="Blog Page" link="blog" name="Blog" />
    <BlogContainer />
    <SubscribeSection />
    <FooterSection />
  </>
);
