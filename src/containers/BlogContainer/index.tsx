import { useState } from 'react';
import { BlogCard } from '@/ui/Cards/BlogCard';
import { blogArticles } from '@/constants/blogArticle';
import { Cards, Container } from './styled';
import { FillButton } from '@/ui/Buttons/FillButton';

export const BlogContainer = () => {
  const [newsQuantity, setNews] = useState(9);

  const handleNews = () => {
    setNews((prev) => prev + 9);
  };

  return (
    <Container>
      <Cards>
        {blogArticles
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
      {blogArticles.length > newsQuantity && (
        <FillButton text="More articles" onClick={handleNews} />
      )}
    </Container>
  );
};
