import { useContext, useState } from 'react';
import { SecondDescriptionSection } from 'tired-hollow-lib-modsen';

import { BlogArticle } from '@/components/BlogArticle';
import { Sidebar } from '@/components/Sidebar';
import { blogArticles } from '@/constants/blogArticle';
import { Language } from '@/utils/languageContext';

import { Container } from './styled';
import { BlogItemContainerProps } from './types';

export const BlogItemContainer = ({ index }: BlogItemContainerProps) => {
  const { lang } = useContext(Language);

  const { heading, text, icon, info, tags, views } = blogArticles[lang].filter(
    ({ heading }) => heading.indexOf(index) !== -1
  )[0];

  const [cards, setCards] = useState(blogArticles[lang]);

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
          cards={cards}
        />
        <Sidebar />
      </Container>
    </>
  );
};
