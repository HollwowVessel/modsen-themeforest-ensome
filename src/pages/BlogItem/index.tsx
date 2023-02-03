import { useParams } from 'react-router-dom';
import { Navigation } from '@/ui/Navigation';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';

import { FooterSection } from '@/ui/FooterSection';

import { BlogItemContainer } from '@/containers/BlogItemContainer';

export const BlogItemPage = () => {
  const { index } = useParams();

  return (
    <>
      <Navigation />
      <BlogItemContainer index={index as string} />
      <SubscribeSection />
      <FooterSection />
    </>
  );
};
