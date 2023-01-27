import { BlogArticle } from '@/components/BlogArticle';

import { Sidebar } from '@/components/Sidebar';
import { blogArticles } from '@/constants/blogArticle';
import { SecondDescriptionSection } from '@/ui/Sections/SecondDescriptionSection';
import { Container } from './styled';
import { BlogItemContainerProps } from './types';

export const BlogItemContainer = ({ index }: BlogItemContainerProps) => {
  const { heading, text, icon, info, tags, views } =
    blogArticles[+(index as string)];
  return (
    <>
      <SecondDescriptionSection
        heading={text}
        link={`blog/${index}`}
        name={text}
      />
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
