import React, { useState } from 'react';
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
import { categories, posts, tags } from '@/constants/blogSidebar';

export const Sidebar = () => {
  const [activeTag, setActiveTag] = useState(0);

  const handleActiveTag = (id: number) => () => {
    setActiveTag(id);
  };

  return (
    <Container>
      <Search>
        <Email placeholder="Search" />
        <FillButton text="Search" />
      </Search>
      <Heading>Popular posts</Heading>
      <Posts>
        {posts.map(({ date, heading, image }, id) => (
          <Post key={id}>
            <Image src={image} />
            <PostDescription>
              <Date>{date}</Date>
              <Title>{heading}</Title>
              <ArrowLink text="Read more" to="/" />
            </PostDescription>
          </Post>
        ))}
      </Posts>
      <Heading>Categories</Heading>
      <Categories>
        {categories.map((el, id) => (
          <Category key={id}>{el}</Category>
        ))}
      </Categories>
      <Heading>Tags</Heading>
      <Tags>
        {tags.map((el, id) => (
          <Tag key={id} onClick={handleActiveTag(id)} active={id === activeTag}>
            {el}
          </Tag>
        ))}
      </Tags>
    </Container>
  );
};
