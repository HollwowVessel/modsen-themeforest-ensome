import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BlogCard, FillButton } from 'tired-hollow-lib-modsen';

import { blogArticles } from '@/constants/blogArticle';
import { useLanguage } from '@/hooks/useLanguage';

import { Cards, Container } from './styled';

export const BlogContainer = () => {
  const [newsQuantity, setNews] = useState(9);

  const lang = useLanguage();

  const { t } = useTranslation();
  const handleNews = () => {
    setNews((prev) => prev + 9);
  };

  return (
    <Container>
      <Cards>
        {blogArticles[lang]
          .slice(0, newsQuantity)
          .map(({ icon, info, text, heading }, id) => (
            <BlogCard
              heading={heading}
              id={id}
              image={icon}
              text={text}
              key={id}
              date={info}
            />
          ))}
      </Cards>
      {blogArticles[lang].length > newsQuantity && (
        <FillButton text={t('More articles')} onClick={handleNews} />
      )}
    </Container>
  );
};
