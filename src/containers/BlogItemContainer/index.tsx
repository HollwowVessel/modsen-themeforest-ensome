import { useState } from 'react';
import { BlogArticle } from '@/components/BlogArticle';

import { Sidebar } from '@/components/Sidebar';
import { blogArticles } from '@/constants/blogArticle';
import { SecondDescriptionSection } from '@/ui/Sections/SecondDescriptionSection';
import { Container } from './styled';
import { BlogItemContainerProps } from './types';

export const BlogItemContainer = ({ index }: BlogItemContainerProps) => {
  const { heading, text, icon, info, tags, views } =
    blogArticles[+(index as string)];
  const [cards, setCards] = useState(blogArticles);

  const handleCards = (items: typeof cards) => {
    setCards(items);
  };

  return (
    <>
      <SecondDescriptionSection
        heading={heading}
        link={`blog/${index}`}
        name={heading}
      />
      <Container>
        <BlogArticle
          text={text}
          heading={heading}
          image={icon}
          date={info}
          tags={tags}
          views={views}
          cards={cards}
        />
        <Sidebar handleCards={handleCards} />
      </Container>
    </>
  );
};
