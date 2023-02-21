import { useParams } from 'react-router-dom';
import { SubscribeSection } from 'tired-hollow-lib-modsen';

import { BlogItemContainer } from '@/containers/BlogItemContainer';
import { Layout } from '@/containers/Layout';

export const BlogItemPage = () => {
  const { index } = useParams();

  return (
    <Layout>
      <BlogItemContainer index={index as string} />
      <SubscribeSection />
    </Layout>
  );
};
