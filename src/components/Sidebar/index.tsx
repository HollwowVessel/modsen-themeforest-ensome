/* eslint-disable react/jsx-no-bind */
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
  Search,
  Tag,
  Tags,
  Title,
} from './styled';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import { tags as allTags, categories } from '@/constants/blogSidebar';
import { blogArticles } from '@/constants/blogArticle';
import { SidebarProps } from './types';
import { searchHelper } from '@/utils/searchHelper';
import { InputWithButton } from '@/ui/Inputs/InputWithButton';

export const Sidebar = ({ handleCards }: SidebarProps) => {
  const [activeTag, setActiveTag] = useState(0);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(-1);

  const handleFilter = (id: number) => () => {
    setActiveTag(id);
    searchHelper(activeTag, search, handleCards, id);
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (!e.target.value && handleCards) {
      handleCards(blogArticles);
    }
  };

  const handleCategory = (id: number) => () => {
    if (id !== activeCategory) {
      setActiveCategory(id);
    } else {
      setActiveCategory(-1);
    }
  };

  const handleClick = () => {
    searchHelper(activeTag, search, handleCards);
  };

  return (
    <Container>
      <InputWithButton
        placeholder="Search"
        onChange={searchHandler}
        value={search}
        buttonText="Search"
        onClick={handleClick}
      />

      <Heading>Popular posts</Heading>
      <Posts>
        {blogArticles
          .sort((a, b) => b.views - a.views)
          .slice(0, 4)
          .map(({ info, heading, icon }, id) => (
            <Post key={heading}>
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
          <Tag key={el} onClick={handleFilter(id)} active={id === activeTag}>
            {el}
          </Tag>
        ))}
      </Tags>
    </Container>
  );
};
