import { SecondDescriptionSection } from 'tired-hollow-lib-modsen';

import { BlogArticle } from '@/components/BlogArticle';
import { Sidebar } from '@/components/Sidebar';
import { blogArticles } from '@/constants/blogArticle';
import { useLanguage } from '@/hooks/useLanguage';

import { Container } from './styled';
import { BlogItemContainerProps } from './types';

export const BlogItemContainer = ({ index }: BlogItemContainerProps) => {
  const lang = useLanguage();

  const { heading, text, icon, info, tags, views } = blogArticles[lang].filter(
    ({ heading }) => heading.indexOf(index) !== -1
  )[0];

  return (
    <>
      <SecondDescriptionSection heading={heading} />
      <Container>
        <BlogArticle
          text={text}
          heading={heading}
          image={icon}
          date={info}
          tags={tags}
          views={views}
          cards={blogArticles[lang]}
        />
        <Sidebar />
      </Container>
    </>
  );
};
