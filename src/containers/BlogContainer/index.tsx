import { useState } from 'react';
import { BlogCard } from '@/ui/Cards/BlogCard';
import { Sidebar } from '@/components/Sidebar';
import { blogArticles } from '@/constants/blogArticle';
import { Cards, Container } from './styled';

export const BlogContainer = () => {
  const [cards, setCards] = useState(blogArticles);

  const handleCards = (items: typeof cards) => {
    setCards(items);
  };

  return (
    <Container>
      <Cards>
        {cards.map(({ icon, info, text, heading, tags }, id) => (
          <BlogCard
            heading={heading}
            id={id}
            image={icon}
            text={text}
            key={icon}
            date={info}
            tags={tags}
          />
        ))}
      </Cards>
      <Sidebar handleCards={handleCards} />
    </Container>
  );
};
