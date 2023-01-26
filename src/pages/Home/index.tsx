import React from 'react';

import { HelpSection } from '@/ui/Sections/HelpSection';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { FooterSection } from '@/ui/FooterSection';
import { Benefits } from '@/components/Benefits';

import { Pricing } from '@/components/Pricing';

import { Overview } from '@/components/Overview';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/ui/Navigation';
import { Carousel } from '@/ui/Carousel';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { cardItems } from '@/constants/testimonialCards';
import { BlogCard } from '@/ui/Cards/BlogCard';
import { blogArticles } from '@/constants/blogArticle';

export const HomePage = () => (
  <>
    <Navigation />
    <Hero />
    <Features />
    <Overview />
    <Benefits />
    <Carousel
      Card={TestimonialsCard}
      cards={cardItems}
      heading="Testimonials"
      type="close"
    />
    <Pricing />
    <Carousel
      Card={BlogCard}
      cards={blogArticles}
      heading="Our blog"
      type="blog"
    />
    <HelpSection />
    <SubscribeSection />
    <FooterSection />
  </>
);
