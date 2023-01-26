import { BlogArticle } from '@/components/BlogArticle';
import { BlogDescription } from '@/components/BlogDescription';
import { Sidebar } from '@/components/Sidebar';
import { blogArticles } from '@/constants/blogArticle';
import { Container } from './styled';
import { BlogItemContainerProps } from './types';

export const BlogItemContainer = ({ index }: BlogItemContainerProps) => {
  const { heading, text, icon, info, tags, views } =
    blogArticles[+(index as string)];
  return (
    <>
      <BlogDescription text={heading} />
      <Container>
        <BlogArticle
          text={text}
          heading={heading}
          image={icon}
          date={info}
          tags={tags}
          views={views}
        />
        <Sidebar />
      </Container>
    </>
  );
};
