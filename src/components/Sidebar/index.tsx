import { ChangeEvent, useState } from 'react';

import {
  Categories,
  Category,
  Container,
  Date,
  Heading,
  Image,
  Post,
  PostDescription,
  Posts,
  Tag,
  Tags,
  Title,
} from './styled';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import { tags as allTags, categories } from '@/constants/blogSidebar';
import { blogArticles } from '@/constants/blogArticle';
import { SidebarProps } from './types';
import { InputWithButton } from '@/ui/Inputs/InputWithButton';

export const Sidebar = ({ handleCards }: SidebarProps) => {
  const [search, setSearch] = useState('');
  const [activeTag, setTag] = useState(0);
  const [activeCategory, setActiveCategory] = useState(-1);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      handleCards(
        blogArticles.filter(
          ({ tags }) =>
            tags.indexOf(allTags[activeTag]) !== -1 ||
            allTags[activeTag] === 'All topics'
        )
      );
    }
  };

  const handleCategory = (id: number) => () => {
    if (id !== activeCategory) {
      setActiveCategory(id);
    } else {
      setActiveCategory(-1);
    }
  };

  const handleTag = (id: number) => () => {
    setTag(id);
    handleCards(
      blogArticles.filter(
        ({ heading, tags }) =>
          heading.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
          (tags.indexOf(allTags[id]) !== -1 || allTags[id] === 'All topics')
      )
    );
  };

  const handleSearch = () => {
    handleCards(
      blogArticles.filter(
        ({ heading, tags }) =>
          heading.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
          (tags.indexOf(allTags[activeTag]) !== -1 ||
            allTags[activeTag] === 'All topics')
      )
    );
  };

  return (
    <Container>
      <InputWithButton
        placeholder="Search"
        onChange={searchHandler}
        value={search}
        buttonText="Search"
        onClick={handleSearch}
      />

      <Heading>Popular posts</Heading>
      <Posts>
        {blogArticles
          .sort((a, b) => b.views - a.views)
          .slice(0, 4)
          .map(({ info, heading, icon }, id) => (
            <Post key={id}>
              <Image src={icon} loading="lazy" />
              <PostDescription>
                <Date>{info}</Date>
                <Title>{heading}</Title>
                <ArrowLink text="Read more" to={`/blog/${id}`} />
              </PostDescription>
            </Post>
          ))}
      </Posts>
      <Heading>Categories</Heading>
      <Categories>
        {categories.map((el, id) => (
          <Category
            key={el}
            onClick={handleCategory(id)}
            active={activeCategory === id}
          >
            {el}
          </Category>
        ))}
      </Categories>
      <Heading>Tags</Heading>
      <Tags>
        {allTags.map((el, id) => (
          <Tag key={el} onClick={handleTag(id)} active={id === activeTag}>
            {el}
          </Tag>
        ))}
      </Tags>
    </Container>
  );
};
