/* eslint-disable react/jsx-no-bind */
import React, { ChangeEvent, useState } from 'react';

import { BlogArticleI } from 'types/blogTypes';
import { FillButton } from '@/ui/Buttons/FillButton';
import { Email } from '@/ui/Inputs/styled';
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
      <Search>
        <Email
          placeholder="Search"
          onChange={(e) => searchHandler(e)}
          value={search}
        />
        <FillButton text="Search" onClick={handleClick} />
      </Search>

      <Heading>Popular posts</Heading>
      <Posts>
        {blogArticles
          .sort((a, b) => b.views - a.views)
          .slice(0, 4)
          .map(({ info, heading, icon }, id) => (
            <Post key={id}>
              <Image src={icon} />
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
            key={id}
            onClick={handleCategory(id)}
            active={activeCategory === id}>
            {el}
          </Category>
        ))}
      </Categories>
      <Heading>Tags</Heading>
      <Tags>
        {allTags.map((el, id) => (
          <Tag key={id} onClick={handleFilter(id)} active={id === activeTag}>
            {el}
          </Tag>
        ))}
      </Tags>
    </Container>
  );
};
